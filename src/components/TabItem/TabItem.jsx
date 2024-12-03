

const TabItem = ({ item }) => {
    const { name, recipe, image, price } = item;
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
                    <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default TabItem;