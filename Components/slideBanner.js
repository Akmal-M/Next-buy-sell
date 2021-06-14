import React from 'react';
import SwiperSliderForAll from "./swiper";
import CardTop from "./cards/CardTop";
import useTranslation from "next-translate/useTranslation";

const SlideBanner = (props) => {
    const {t, lang} = useTranslation();

    console.log(props.store)

    return (
   <div className={'mt-5 lg:mt-5'}>
       <p className='text-center text-lg lg:text-2xl text-gray-700'>{t('Топ объявлений')}</p>
       <div className='swiper-slide '>

           <SwiperSliderForAll slides={1} swiperContent1={
               <CardTop
               />
           }

           />
       </div>
   </div>
    );
}

export default SlideBanner;