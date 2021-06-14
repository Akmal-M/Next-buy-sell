import Footer from "../Components/Footer";
import React from "react";
import MainProducts from "../Components/MainProducts";
import SlideBanner from "../Components/slideBanner";
import Header from "../Components/navbar/Header";
import SimpleSlider from "../Components/slick";

const Home = () => {

    return (
        <div className='container mx-auto'>
            <Header/>
            {/*<SimpleSlider/>*/}
            {/*<SlideBanner/>*/}
            {/*<MainProducts/>*/}
            <Footer/>

        </div>
    );
};

export default Home;