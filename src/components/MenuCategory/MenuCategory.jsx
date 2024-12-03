
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items,index }) => {

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link to={index ?`/shop?index=${index}` : '/shop'}>
                <button className="btn btn-outline mt-10 border-0 border-b-4 text-[#1F2937]">Order Your Favourite Food</button>
                </Link>
                
            </div>
        </div>
    );
};

export default MenuCategory;