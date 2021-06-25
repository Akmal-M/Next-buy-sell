import React from 'react';
import Slider from "./swiper";
import useTranslation from "next-translate/useTranslation";
import {IoMdHeartEmpty} from "react-icons/io";

const SlideBanner = (products) => {
    const {t, lang} = useTranslation();

    console.log(products)
    const SlideTop = () => {
        return (
            <div>
            { products.map(product => (
                <div key={product._id}>
                    <div className='lg:block hidden '>
                        <div
                            className=' lg:mx-5 mx-1 p-2 lg:my-10 mb-5 smooth-shadow hover:smooth-hover w-44    cursor-pointer rounded-lg bg-white '>
                            <div>
                                <img src={product.images[0].url} alt="" className='w-40 h-32 object-cover'/>
                            </div>
                            <div>
                                <p className='font-bold text-xs  pt-2 pb-1 text-line-cut'>{product.name}</p>
                                <div className='flex justify-between text-small'>
                                    <p>{product.address}</p>

                                    <p>{product.time}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p className='text-sm font-bold'>${product.price}</p>
                                    <div>
                                        <IoMdHeartEmpty className='text-2xl '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden flex'>

                        <div key={product._id}
                             className='lg:p-3 mx-1 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-28 cursor-pointer rounded-lg bg-white '>
                            <div>
                                <img src={product.images[0].url} alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className='text-cut'>
                                <p className='font-bold text-small py-1 text-line-cut'>{product.name}</p>
                                <div className='flex justify-between lg:text-small text-small'>
                                    <p>{product.address}</p>

                                    <p>{product.time}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p className=' text-smaller font-bold'>${product.price}</p>
                                    <div>
                                        <IoMdHeartEmpty size={16}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }



        </div>
        )
    }

    return (
   <div className={'mt-5 lg:mt-5'}>
       <p className='text-center text-lg lg:text-2xl text-gray-700'>{t('Топ объявлений')}</p>
       <div className='swiper-slide '>

           <Slider slides={1} swiperContent1={
               [SlideTop]
           }

           />
       </div>
   </div>
    );
}

export default SlideBanner;