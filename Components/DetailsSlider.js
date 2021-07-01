import {Swiper, SwiperSlide} from 'swiper/react';
import {useState} from "react";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const DetailsSlider = ({images}) => {

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {

            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';

        }
    }
    console.log(images)
    return (
        <div className='lg:mb-28 mb-5'>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                loop={"true"}
                speed={3000}
                pagination={pagination}
                className='container mx-auto lg:mt-10 lg:max-w-3xl max-w-xs lg:h-96 h-72 flex justify-center '>
                {
                    images[0] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[0].url} alt={images[0].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[1] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[1].url} alt={images[1].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[2] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[2].url} alt={images[2].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[3] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[3].url} alt={images[3].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[4] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[4].url} alt={images[4].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[5] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[5].url} alt={images[5].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />
                        </div>
                    </SwiperSlide>
                }
                {
                    images[6] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[6].url} alt={images[6].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />

                        </div>
                    </SwiperSlide>
                }
                {
                    images[7] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[7].url} alt={images[7].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />

                        </div>
                    </SwiperSlide>
                }
                {
                    images[8] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[8].url} alt={images[8].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />

                        </div>
                    </SwiperSlide>
                }
                {
                    images[9] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[9].url} alt={images[9].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />

                        </div>
                    </SwiperSlide>
                }
                {
                    images[10] &&
                    <SwiperSlide className='flex justify-center '>
                        <div className='flex justify-center '>
                            <img src={images[10].url} alt={images[10].url}
                                 className="mt-5 lg:max-w-7xl max-w-xs px-2 object-cover "
                            />

                        </div>
                    </SwiperSlide>
                }
            </Swiper>
        </div>
    );
};

export default DetailsSlider;