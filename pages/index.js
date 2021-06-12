import Search from "../Components/search/Search";
import Footer from "../Components/Footer";
import SlideBanner from "../Components/slideBanner";
import MobileCategory from "../Components/category/MobileCategory";
import React from "react";
import CategoryCardAll from "../Components/category/CategoryCardAll";
import MainProducts from "../Components/MainProducts";
import CategoryMenu from "../Components/CategoryMain/categoryMenu";
import CategoryCard from "../Components/CategoryMain/categoryCard";
import Kategoriya from "../Components/CategoryMain/Kategoriya";

const Home = () => {

    return (
        <div>
            <Search/>
            {/*<MobileCategory/>*/}
            {/*<Categories/>*/}
            {/*<CategoryCardAll/>*/}
            {/*<MainProducts/>*/}
            {/*<SlideBanner/>*/}
            <Kategoriya/>
            <Footer/>
            {/*<CategoryMenu/>*/}
            {/*<CategoryCard/>*/}
        </div>
    );
};

export default Home;