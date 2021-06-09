import Search from "../components/Search";
import Categories from "../components/category/Categories";
import Footer from "../components/Footer";
import Products from "../components/cards/Products";
import SlideBanner from "../components/slideBanner";
import MobileCategory from "../components/category/MobileCategory";
import React from "react";
import CategoryCardAll from "../components/category/CategoryCardAll";

const Home = () => {

    return (
        <div style={{backgroundColor: '#ffffe8'}}>
            <Search/>
            <MobileCategory/>
            {/*<Categories/>*/}
            <CategoryCardAll/>
            <Products/>
            <SlideBanner/>
            <Footer/>
        </div>
    );
};

export default Home;