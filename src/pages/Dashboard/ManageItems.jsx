import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useMenuData from "../../hooks/useMenuData";
import Swal from "sweetalert2";
import useSecureAxios from "../../hooks/useSecureAxios";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenuData()
    const secureAxios = useSecureAxios()


    const handleDeleteItems = (id) => {
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
                secureAxios.delete(`/menu/${id}`)
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
    const handleUpdateItems = () => { }
    return (
        <div>
            <SectionHeader title={`Manage All Items`} subtitle={`Hurry up`} styleName={`text-3xl`}></SectionHeader>
            <div className="bg-white w-5/6 mx-auto p-10 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-cinzel">Total Items: {menu.length}</h2>

                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white bg-[#D1A054] uppercase font-cinzel ">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}

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
                                        <td>
                                            {item.category}

                                        </td>
                                        <td>
                                            ${item.price}

                                        </td>
                                        <td>
                                            <Link to={`/dashboard/manage-items/update-item/${item._id}`}>
                                                <button onClick={() => handleUpdateItems(item)} className="btn btn-md text-2xl text-white bg-[#D1A054]">
                                                    <FaEdit />
                                                </button>
                                            </Link>

                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteItems(item._id)} className="btn btn-md text-white bg-red-600">
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

export default ManageItems;