import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../hooks/useCart";


const TabItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()

    const handleAddToCart = (food) => {
        if (user) {
            const cartData = {
                orderId:food._id,
                email:user.email,
                name,
                image,
                price
            }
            axios.post("http://localhost:5000/carts",cartData)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
                
            })
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please, Login for add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate("/login",{state:location.pathname})
                }
            });
        }
    }
    return (
        <div className="relative card card-compact w-96 shadow-xl space-y-3 py-10">
            <figure>
                <img
                    src={image}
                    alt="Img" />
            </figure>
            <p className="absolute top-10 right-10 bg-black text-white px-4">${price}</p>
            <div className="flex flex-col justify-center items-center gap-3 px-6 text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-[#BB8506] uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default TabItem;