import React from 'react';

import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from '../../components/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} subTitle={"would you like to try our dish?"}></Cover>
           
  
        </div>
    );
};

export default Menu;