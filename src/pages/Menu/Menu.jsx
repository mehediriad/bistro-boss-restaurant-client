import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useMenuData from "../../hooks/useMenuData";
import MenuCategory from "../../components/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenuData()
    const offeredItems = menu.filter(item => item.category === 'offered')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
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
            <SectionHeader
                title={`TODAY'S OFFER`}
                subtitle={`Don't miss`}
            ></SectionHeader>

            <MenuCategory items={offeredItems}></MenuCategory>

            <Cover
                coverImg={dessertBg}
                title={`Desserts`}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                titleClass={`text-4xl`}
            ></Cover>
            <MenuCategory items={dessertItems}></MenuCategory>

            <Cover
                coverImg={pizzaBg}
                title={`Pizza`}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                titleClass={`text-4xl`}
            ></Cover>
            <MenuCategory items={pizzaItems}></MenuCategory>


            <Cover
                coverImg={saladBg}
                title={`Salads`}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                titleClass={`text-4xl`}
            ></Cover>
            <MenuCategory items={saladItems}></MenuCategory>

            <Cover
                coverImg={soupBg}
                title={`Soups`}
                subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                titleClass={`text-4xl`}
            ></Cover>
            <MenuCategory items={soupItems}></MenuCategory>
        </div>
    );
};

export default Menu;