import { FaUtensils } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import axios from "axios";
import Swal from "sweetalert2";
import useSecureAxios from "../../hooks/useSecureAxios";


const AddItems = () => {

    const secureAxios = useSecureAxios()
    const handleAddItems = async (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const recipe = e.target.recipe.value;
        const price = e.target.price.value;
        const image = e.target.image.files;
        const category = e.target.category.value

        

        const imgFile = {image:image[0]}
        
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,imgFile,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
       
        
        
        const menuItem = {
            name,
            recipe,
            price,
            category,
            image:res.data.data.url
        }

        const menuRes = await secureAxios.post("/menu",menuItem);
        
        if(menuRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You are now Logged In!!",
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset()
        }
        
    }
    return (
        <div>
            <div className="-my-10">
                <SectionHeader title={`Add An Item`} subtitle={`What's New`} styleName={`text-3xl`}></SectionHeader>
            </div>
            <div className="bg-white w-5/6 mx-auto p-6 rounded-lg shadow-2xl mb-20">

                <div className="card w-full shrink-0  bg-white">
                    <div className="card-body ">

                        <form onSubmit={handleAddItems} className="space-y-3">

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Recipe Name*</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered bg-transparent" required />
                            </div>


                            <div className="flex-none lg:flex gap-6">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black font-bold">Category*</span>
                                    </label>
                                    <div className="form-control relative">
                                        <select name="category" className="select bg-white select-bordered w-full max-w-xs">
                                            <option disabled selected>Select Category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>

                                        </select>
                                    </div>

                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black font-bold">Price*</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="price" type="text" placeholder="price" className="input input-bordered bg-transparent" required />

                                    </div>

                                </div>
                            </div>

                            <div className="form-control py-4">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Recipe Details*</span>
                                </label>
                                <textarea name="recipe" className="textarea bg-white textarea-bordered h-24" placeholder="Details" required></textarea>
                            </div>
                            <div className="form-control">

                                <input name="image" type="file" className="file-input bg-white w-full max-w-xs" />
                            </div>
                            <div className="form-control pt-4">
                                <button type="submit" className="btn bg-[#D1A054] text-white">Add Item <FaUtensils /></button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;