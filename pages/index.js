import Search from "../components/Search";
import Categories from "../components/category/Categories";
import Footer from "../components/Footer";
import Products from "../components/cards/Products";
import SlideBanner from "../components/slideBanner";
import SlideCategory from "../components/category/slideCategory";
import React from "react";

const Home = () => {

    return (
        <div className='text-gray-800 '>
            <Search/>
            <SlideCategory/>
            <Categories/>
            <Products/>
            <SlideBanner/>
            <Footer/>
        </div>
    );
};

export default Home;