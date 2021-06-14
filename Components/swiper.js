import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';


const SwiperSliderForAll = ({slides,
                                swiperContent1,
                                swiperContent2,
                                swiperContent3,
                                swiperContent4,
                                swiperContent5,
                                swiperContent6,
                                swiperContent7,
                                swiperContent8,
                                swiperContent9,
                                swiperContent10,
                                swiperContent11,
                                swiperContent12,

                            }) => {


        return (
            
            <Swiper

                spaceBetween={5}
                slidesPerView={slides}
                loop={"true"}
                speed={3000}
                autoplay={{
                    speed: 3000,
                    disableOnInteraction: false,
                    disableKeyboardControls: false,
                }} className=" container mx-auto  bg-no-repeat  ">


                {swiperContent1 && <SwiperSlide>
                    {swiperContent1}
                </SwiperSlide>}

                {swiperContent2 && <SwiperSlide>
                    {swiperContent2}
                </SwiperSlide>}

                {swiperContent3 && <SwiperSlide>
                    {swiperContent3}
                </SwiperSlide>}

                {swiperContent4 && <SwiperSlide>
                    {swiperContent4}
                </SwiperSlide>}

                {swiperContent5 && <SwiperSlide>
                    {swiperContent5}
                </SwiperSlide>}

                {swiperContent6 && <SwiperSlide>
                    {swiperContent6}
                </SwiperSlide>}

                {swiperContent7 && <SwiperSlide>
                    {swiperContent7}
                </SwiperSlide>}

                {swiperContent8 && <SwiperSlide>
                    {swiperContent8}
                </SwiperSlide>}

                {swiperContent9 && <SwiperSlide>
                    {swiperContent9}
                </SwiperSlide>}

                {swiperContent10 && <SwiperSlide>
                    {swiperContent10}
                </SwiperSlide>}

                {swiperContent11 && <SwiperSlide>
                    {swiperContent11}
                </SwiperSlide>}

                {swiperContent12 && <SwiperSlide>
                    {swiperContent12}
                </SwiperSlide>}




            </Swiper>
        );
    }
;

export default SwiperSliderForAll;