import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const DetailsSlider = (img) => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='lg:mb-28 mb-5'>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                loop={"true"}
                speed={3000}
                autoplay={{
                    speed:1000,
                    disableOnInteraction: false
                }} className='container mx-auto lg:mt-10 '>




                <SwiperSlide className='flex justify-center'>
                    <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt="" className='lg:h-96 '/>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default DetailsSlider;