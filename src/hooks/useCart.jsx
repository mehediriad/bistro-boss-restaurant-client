import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useCart = () => {
    const {user} = useAuth()
    const {data:cart=[],refetch} = useQuery({
        queryKey:["cart", user?.email],
        queryFn: async () =>{
            const resData = await axios.get(`https://bistro-boss-restaurant-server-hazel.vercel.app/carts?email=${user.email}`)
            return resData.data;
        }
    })

    return  [cart,refetch]
};

export default useCart;