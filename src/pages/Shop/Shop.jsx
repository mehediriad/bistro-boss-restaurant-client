import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import "./Shop.css"
import useMenuData from "../../hooks/useMenuData";
import TabItems from "../../components/TabItems/TabItems";
import { useLocation } from "react-router-dom";


const Shop = () => {
    
    const [menu] = useMenuData()

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get('index');

    const [tabIndex, setTabIndex] = useState(parseInt(myParam))
    
    
    
    
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    const drinksItems = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <Cover
                coverImg={shopImg}
                title={`Our Shop`}
                subTitle={`Would You Link to try a dish?`}
                titleClass={`text-4xl`}
            ></Cover>


            <div className="max-w-7xl mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="flex justify-center items-center">
                        <TabList >
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <TabItems items={saladItems}></TabItems>
                    </TabPanel>
                    <TabPanel>
                    <TabItems items={pizzaItems}></TabItems>
                    </TabPanel>
                    <TabPanel>
                    <TabItems items={soupItems}></TabItems>
                    </TabPanel>
                    <TabPanel>
                    <TabItems items={dessertItems}></TabItems>
                    </TabPanel>
                    <TabPanel>
                    <TabItems items={drinksItems}></TabItems>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;