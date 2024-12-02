import SectionHeader from "../SectionHeader/SectionHeader";



const FromOurMenu = () => {
    return (
        <div className=" bg-[url('featured.jpg')] bg-no-repeat bg-right-top bg-fixed mb-20">
            <div className="bg-black bg-opacity-40">
                <div className="max-w-7xl mx-auto p-20">
                    <SectionHeader
                        subtitle={"Check it out"}
                        title={"FROM OUR MENU"}
                        styleName={`text-white`}
                    ></SectionHeader>

                    <div className="flex gap-6 items-center">
                        <div>
                            <img src="featured.jpg" alt="" />
                        </div>
                        <div className="text-white space-y-2">
                            <h3 className="text-2xl">March 20, 2023</h3>
                            <h3 className="text-2xl uppercase">WHERE CAN I GET SOME?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline bg-transparent border-b-4 border-t-0 border-x-0 uppercase">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;