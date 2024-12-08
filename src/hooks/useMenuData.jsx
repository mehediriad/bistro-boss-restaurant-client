import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import usePublicAxios from "./usePublicAxios";


const useMenuData = () => {
    // const [menu, setMenu] = useState([])
    // const [dataLoading, setDataLoading] = useState(true)

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setDataLoading(false)
    //         })
    // }, [])

    const publicAxios = usePublicAxios()
    const {data:menu = [] ,isPending:dataLoading,refetch} = useQuery({
        queryKey:["menu"],
        queryFn: async ()=>{
            const res = await publicAxios.get("/menu")
            return res.data
        }
    })
    return [menu, dataLoading,refetch]
};

export default useMenuData;