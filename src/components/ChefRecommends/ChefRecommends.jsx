import SectionHeader from "../SectionHeader/SectionHeader";

import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"

const menus = [
    {
        img: saladImg,
        name: "Caeser Salad",
        details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
    },
    {
        img: soupImg,
        name: "Soup",
        details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
    },
    {
        img: pizzaImg,
        name: "Pizza",
        details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
    },
    
]
const ChefRecommends = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <SectionHeader title={`Chef Recommends`} subtitle={`Should Try`}></SectionHeader>
            <div className="grid grid-cols-3">
                {
                    menus.map((menu, idx) => {
                        return (
                            <div key={idx} className="card card-compact w-96 shadow-xl space-y-3 py-10">
                                <figure>
                                    <img
                                        src={menu.img}
                                        alt="Img" />
                                </figure>
                                <div className="flex flex-col justify-center items-center gap-3">
                                    <h2 className="card-title">{menu.name}</h2>
                                    <p>{menu.details}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] uppercase">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ChefRecommends;