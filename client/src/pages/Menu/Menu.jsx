import React from 'react';

import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
   
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} subTitle={"would you like to try our dish?"}></Cover>
           <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;