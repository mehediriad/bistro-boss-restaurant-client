import axios from "axios";

const publicAxios = axios.create({
    baseURL:"https://bistro-boss-restaurant-server-hazel.vercel.app"
})

const usePublicAxios = () => {
    return publicAxios
};

export default usePublicAxios;