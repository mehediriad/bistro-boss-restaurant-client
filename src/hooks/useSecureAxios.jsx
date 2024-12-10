import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const secureAxios = axios.create({
    baseURL:"https://bistro-boss-restaurant-server-hazel.vercel.app"
})

const useSecureAxios = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    secureAxios.interceptors.request.use((config)=>{
        const token = `${localStorage.getItem("access-token")}`
        config.headers.authorization = token

        return config
    })
    secureAxios.interceptors.response.use((response)=>{
        

        return response
    },async (error) =>{
        const status = error.response.status;
        
        if(status === 401 || status === 403){
            await logOut()
            navigate("/login")
        }
        
        return Promise.reject(error)
    })
    return secureAxios
};

export default useSecureAxios;