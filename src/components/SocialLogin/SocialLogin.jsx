import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleSignIn = (e) =>{
        e.preventDefault()
        googleSignIn()
        .then((result) => {
            const user = result.user
            if(user){
                axios.post("http://localhost:5000/users",{name:user.displayName,email:user.email})
                .then(res =>{
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You are now Logged In!!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                       
                    }
                    navigate(location?.state ? location.state : "/")
                })

                
                
            }
            
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
           
          });
        

    }
    return (
        <div className="space-x-4">
            <button className="text-[#3B5998] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaFacebookF /></button>
            <button className="text-[#3C79E6] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaLinkedinIn /></button>
            <button onClick={handleGoogleSignIn} className="bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FcGoogle /></button>
        </div>
    );
};

export default SocialLogin;