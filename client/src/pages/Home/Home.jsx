import React from 'react';
import Banner from '../../components/Banner';
import Swiper from '../../components/Swiper';
import PopularMenu from '../../components/PopularMenu';
import Featured from '../../components/Featured';
import Testimonials from '../../components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
                <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Swiper></Swiper>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;