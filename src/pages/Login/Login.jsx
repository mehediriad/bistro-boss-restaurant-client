import { useEffect, useRef, useState } from "react";
import authImg from "../../assets/others/authentication2.png"
import bgImg from "../../assets/others/authentication.png"
import { FaEye, FaEyeSlash, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const {signInUser} = useAuth()
    const [show, setShow] = useState(false);
    const [btnDisabled,setBtnDisabled] = useState(true)
    const reCapchaRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    console.log(location);
    
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

    const handleLogin = ( e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            if(user){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are now Logged In!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        
    }
    return (
        <div className="p-0" style={{ backgroundImage: `url(${bgImg})` }}>

            <div className="hero min-h-screen shadow-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={authImg} alt="Login" />

                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl p-4 bg-white">
                        <div className="card-body ">
                            <h1 className="text-2xl font-bold">Login</h1>
                            <form onSubmit={handleLogin}>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Password</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered bg-transparent" required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
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
                                    <button disabled={btnDisabled} type="submit" className="btn bg-[#D1A054] text-white">Sign In</button>
                                </div>
                            </form>

                            <div className="text-center mt-3 space-y-3">
                                <small>Or Sign In With</small>
                                <SocialLogin/>
                                <small>New Here?<Link to={`/register`} className="btn btn-link text-[#D1A054]">Sign Up</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;