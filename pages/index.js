import Search from "../components/search/Search";
import Footer from "../components/Footer";
import SlideBanner from "../components/slideBanner";
import MobileCategory from "../components/category/MobileCategory";
import React from "react";
import CategoryCardAll from "../components/category/CategoryCardAll";
import MainProducts from "../components/MainProducts";

const Home = () => {

    return (
        <div>
            <Search/>
            <MobileCategory/>
            {/*<Categories/>*/}
            <CategoryCardAll/>
            <MainProducts/>
            <SlideBanner/>
            <Footer/>
        </div>
    );
};

export default Home;