
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";



const Users = () => {

    const { data: users = [] ,refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            
            const resData = await axios.get(`http://localhost:5000/users`)
            return resData.data;
        }
    })

    const handleDeleteUser = (id) =>{
        
        
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
                axios.delete(`http://localhost:5000/users/${id}`)
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

    const handleMakeAdmin = (id,name) =>{
        
        Swal.fire({
            title: "Are you sure?",
            text: `You want make admin ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000//users/make-admin/${id}`)
                    .then(res => {
                       
                        
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: `Now, ${name} Made as an Admin.`,
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
            <SectionHeader title={`Manage All Users`} subtitle={`How Many`} styleName={`text-3xl`}></SectionHeader>
            <div className="bg-white w-5/6 mx-auto p-10 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-cinzel">Total Users: {users.length}</h2>

                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white bg-[#D1A054] uppercase font-cinzel ">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) => <tr key={user._id}>
                                        <th>
                                            {idx + 1}

                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                {user.name}
                                            </div>
                                        </td>
                                        <td>
                                            {user.email}

                                        </td>
                                        <td>
                                            <button onClick={() =>handleMakeAdmin (user._id,user.name)} className="btn btn-md text-2xl text-white bg-[#D1A054]">
                                                <FaUsers />
                                            </button>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteUser (user._id)} className="btn btn-md text-white bg-red-600">
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

export default Users;