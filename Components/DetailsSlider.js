import { Swiper, SwiperSlide } from 'swiper/react';
import {useState} from "react";


const DetailsSlider = ({product}) => {
    const [tab] = useState(0)


    return (
        <div className='lg:mb-28 mb-5'>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                loop={"true"}
                speed={3000}
                className='container mx-auto lg:mt-10 max-w-5xl'>
                <SwiperSlide className='flex justify-center '>
                    <div className='flex justify-center '>
                        <img src={ product.images[tab].url } alt={ product.images[tab].url }
                             className="mt-5 lg:max-w-7xl px-2 "
                        />
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default DetailsSlider;