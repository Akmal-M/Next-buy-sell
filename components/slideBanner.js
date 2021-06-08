import React from 'react';
import SwiperSliderForAll from "./swiper";

const SlideBanner = () => {
    return (
        <div>
            <SwiperSliderForAll slides={1}  swiperContent1={
                <div>
                    <img
                        src="https://res.cloudinary.com/bulutvoy/image/upload/v1621973685/nextjs_media/sfjipjk6bjzihhvlprga.png"
                        alt=""
                        className='w-full'/>
                </div>
            }
                                swiperContent2={
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/bulutvoy/image/upload/v1621973685/nextjs_media/sfjipjk6bjzihhvlprga.png"
                                            alt=""
                                            className='w-full'/>
                                    </div>
                                }
            />
        </div>
    );
};

export default SlideBanner;