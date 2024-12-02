import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import MenuItem from "../MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div className="max-w-7xl mx-auto mb-24">
            <SectionHeader
            subtitle={'Check it out'}
            title={'FROM OUR MENU'}
            ></SectionHeader>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;