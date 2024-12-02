

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="flex gap-4 items-center">
            <div className="w-[120px]">
                <img className="w-full rounded-full rounded-tl-none" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <h3 className="text-xl">{name}---------------------------</h3>
                <p className="text-sm">{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;