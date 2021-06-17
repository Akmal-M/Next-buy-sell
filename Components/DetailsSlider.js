import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const DetailsSlider = (img) => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='lg:mb-28 mb-5'>
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                loop={"true"}
                speed={3000}
                autoplay={{

                    speed:1000,
                    disableOnInteraction: false
                }} className='container mx-auto lg:mt-10 '>




                <SwiperSlide className='flex justify-center'>
                    {img}
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default DetailsSlider;