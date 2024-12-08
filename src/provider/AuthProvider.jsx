import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser)
              const userInfo = {email: currentUser.email}
              if(currentUser){
                axios.post("http://localhost:5000/jwt",userInfo)
                .then(res =>{
                   if(res.data?.token){
                    localStorage.setItem("access-token",`Bearer ${res.data.token}`)
                   }
                })
              }
              setLoading(false)
            } else {
                setUser(null)
                localStorage.removeItem("access-token")
                setLoading(false)
            }
          });

          return ()=>unSubscribe()
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        updateUserProfile,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;