import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import useSecureAxios from "../hooks/useSecureAxios";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {loading,user} = useAuth()
    const location = useLocation()

    const [admin,adminPanding] = useAdmin()
    console.log("admin",admin,adminPanding);
    
    if(loading || adminPanding){
        return <div  className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
        
    }

    if(!user || !admin){
        return <Navigate to="/login" state={location.pathname}/>
    }
    return children
};

export default AdminRoute;