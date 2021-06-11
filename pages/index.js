import Search from "../Components/search/Search";
import Footer from "../Components/Footer";
import SlideBanner from "../Components/slideBanner";
import MobileCategory from "../Components/category/MobileCategory";
import React from "react";
import CategoryCardAll from "../Components/category/CategoryCardAll";
import MainProducts from "../Components/MainProducts";
import CategoryMenu from "../Components/CategoryMain/categoryMenu";

const Home = () => {

    return (
        <div style={{backgroundColor: ''}}>
            <Search/>
            <MobileCategory/>
            {/*<Categories/>*/}
            <CategoryCardAll/>
            <MainProducts/>
            <SlideBanner/>
            <Footer/>
            <CategoryMenu/>
        </div>
    );
};

export default Home;