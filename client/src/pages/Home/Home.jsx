import React from 'react';
import Banner from '../../components/Banner';
import Swiper from '../../components/Swiper';
import PopularMenu from '../../components/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swiper></Swiper>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;