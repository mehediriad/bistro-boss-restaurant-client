import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {loading,user} = useAuth()
    const location = useLocation()

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}/>
    }
    return children
};

export default PrivateRoute;