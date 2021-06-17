import React, {Component} from "react";
import Slider from "react-slick";
import CardTop from "./cards/CardTop";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Slider {...settings}>
                <div>
                    <h2 className='text-center pt-5'>Топ объявлений</h2>
                    <div>
                        <div className='flex'>
                            <div className='flex'>
                                <CardTop products={this.props.products}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}