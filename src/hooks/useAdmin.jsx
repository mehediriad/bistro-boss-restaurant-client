import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useAuth from "./useAuth";


const useAdmin = () => {
    const secureAxios = useSecureAxios()
    const {user} = useAuth()

    const {data:admin,isPending:adminPanding} = useQuery({
        queryKey:["isAdmin",user?.email],
        queryFn:async ()=>{
            const res = await secureAxios.get(`/users/admin?email=${user.email}`)
            
            return res.data.admin
        }
    })
    return [admin,adminPanding]
};

export default useAdmin;