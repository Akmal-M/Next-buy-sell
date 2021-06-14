import React, { Component } from "react";
import Slider from "react-slick";
import CardTop from "./cards/CardTop";
import productsData from "../productsData";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 10,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>
                        {
                            productsData.top.map(item => (
                                <CardTop img={top.img[0].url}
                                         address={item.address}
                                         name={item.name}
                                         time={item.time}
                                         price={item.price}/>
                            ))
                        }
                    </div>

                </Slider>
            </div>
        );
    }
}