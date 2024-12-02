import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg"


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                coverImg={menuBg}
                title={`Our Menu`}
                subTitle={`Would You Link to try a dish?`}
                titleClass={`text-6xl`}
            ></Cover>
        </div>
    );
};

export default Menu;