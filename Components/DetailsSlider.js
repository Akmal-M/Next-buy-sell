import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState} from "react";


const DetailsSlider = ({product}) => {
    const [tab, setTab] = useState(0)


    SwiperCore.use([Autoplay]);
    return (
        <div className='lg:mb-28 mb-5'>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                loop={"true"}
                speed={3000}
                // autoplay={{
                //     speed:1000,
                //     disableOnInteraction: false
                // }}
                className='container mx-auto lg:mt-10 '>




                <SwiperSlide className='flex justify-center'>
                    <div className='flex justify-center'>
                        <img src={ product.images[tab].url } alt={ product.images[tab].url }
                             className="mt-5 lg:max-w-5xl px-2 w-80"
                        />
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default DetailsSlider;