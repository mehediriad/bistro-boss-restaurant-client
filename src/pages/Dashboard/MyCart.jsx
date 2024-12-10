import { FaTrashAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useCart from "../../hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total, current) => total + parseInt(current.price), 0)

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://bistro-boss-restaurant-server-hazel.vercel.app/carts/${id}`)
                    .then(res => {
                       
                        
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }

                    })

            }
        });

    }

    return (
        <div>
            <SectionHeader title={`WANNA ADD MORE?`} subtitle={`My Cart`} styleName={`text-3xl`}></SectionHeader>
            <div className="bg-white w-5/6 mx-auto p-10 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-cinzel">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl font-bold font-cinzel">Total Price: ${totalPrice}</h2>
                    {
                        cart.length ?
                        <Link to={`/dashboard/payment`}>
                            <button className="btn bg-[#D1A054] text-white text-lg">Pay</button>
                        </Link>:
                        <button disabled className="btn bg-[#D1A054] text-white text-lg">Pay</button>
                    }
                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white bg-[#D1A054] uppercase font-cinzel ">
                                <tr>
                                    <th>#</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                            {console.log(item)
                                            }
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {item.name}

                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-md text-white bg-red-600">
                                                <FaTrashAlt />
                                            </button>
                                        </th>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;