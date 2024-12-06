import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import authImg from "../../assets/others/authentication2.png"
import bgImg from "../../assets/others/authentication.png"
import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Register = () => {
    const {createUser,updateUserProfile} = useAuth()
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [TremsError, setTremsError] = useState(false)
    const [btnDisabled,setBtnDisabled] = useState(true)
    

    const reCapchaRef = useRef()
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])


    const handleReCapcha = (e) =>{
        e.preventDefault()
        const reCapcha = reCapchaRef.current.value;
        console.log(reCapcha);
        if (validateCaptcha(reCapcha)==true) {
            setBtnDisabled(false)
        }
   
        else {
            setBtnDisabled(true)
        }
        
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        
        setPasswordError(false)
        setConfirmPasswordError(false)
        setTremsError(false)
        
        setError("")


        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const trems = e.target.trems.checked;

        if (password.length < 6) {
            setPasswordError(true)

            return setError("Password must be at least 6 characters or longer")
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError(true)

            return setError("Password don't match")
        }
        if (!trems) {
            setTremsError(true)

            return setError("Confirm Trems & Conditions")
        }

        createUser(email,password)
        .then((userCredential) => {
           
            const user = userCredential.user;

            if(user){
                updateUserProfile(name)
                .then(() => {
                    axios.post("http://localhost:5000/users",{name,email})
                    .then(res =>{
                        if(res.data.insertedId){
                            Swal.fire({
                                title: "Good job!",
                                text: "Your Account has been Created!",
                                icon: "success",
                                footer: 'Click here to <a href="/login">Login</a>'
                              });
                        }
                    })
                    
                      
                      
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
               
            }
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(error){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: errorMessage
                  });
            }
          });

    }

   
    return (

        <div className="py-20" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={authImg} alt="Login" />

                    </div>
                    <div className="bg-white card w-full max-w-sm shrink-0 shadow-2xl p-4 ">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp}>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Password {passwordError && <small className="text-red-500 text-xm"> {"(must be at least 6 characters or longer)"}</small>}</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="password" type={show ? "text" : "password"} placeholder="password" className={`input input-bordered bg-transparent ${passwordError ? "border-red-500" : ""}`} required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>


                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Confirm Password {confirmPasswordError && <small className="text-red-500 text-xm"> {"(password don't match)"}</small>}</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="confirmPassword" type={show ? "text" : "password"} placeholder="confirm password" className={`input input-bordered bg-transparent ${confirmPasswordError ? "border-red-500" : ""}`} required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>


                                </div>


                                <div className="form-control ">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <div className="form-control relative">
                                        <input ref={reCapchaRef} name="reCapcha" type="text" placeholder="type here" className="input input-bordered bg-transparent" required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={handleReCapcha}>Verify</button>
                                    </div>

                                </div>


                                <div className="form-control mt-6">
                                    <label className="cursor-pointer flex items-center space-x-2">
                                        <input name="trems" type="checkbox" className={`border ${TremsError ? "border-red-700" : "border-[#D1A054]"} checkbox checkbox-sm checkbox-[#FF3811]`} />
                                        <span className={`label-text ${TremsError ? "text-red-500" : ""}`}>Accept Terms and Conditions </span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={btnDisabled} type="submit" className="btn bg-[#D1A054] text-white">Register</button>
                                </div>
                            </form>
                            <div className="text-center mt-3 space-y-3">
                                <small>Or Sign In With</small>
                                <SocialLogin/>
                                <small>Already have an account?<Link to={`/login`} className="btn btn-link text-[#D1A054]">Sign In</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;