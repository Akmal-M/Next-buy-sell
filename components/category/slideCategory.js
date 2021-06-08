import React from 'react';
import SwiperSliderForAll from "../swiper";
import Category from "./category";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";


const SlideCategory = () => {
    const {t, lang} = useTranslation();
    return (
        <div className='lg:hidden block'>
            
            <SwiperSliderForAll
                slides={3}
                swiperContent1={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2'>
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Электроника')}/>
                        </div>
                    </Link>
                }
                swiperContent2={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                name={t('Транспорт')}/>
                        </div>
                    </Link>
                }
                swiperContent3={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2'>
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Работа')}/>
                        </div>
                    </Link>
                }
                swiperContent4={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081488/sold%20commerce/gotov_uh90qg.png'
                                name={t('Недвижимость')}/>
                        </div>
                    </Link>
                }
                swiperContent5={

                    <Link href='/exchange'>
                        <div className='flex justify-center my-2'>
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623082500/sold%20commerce/png-transparent-teddy-bear-gund-stuffed-toy-plush-plush-toy-blue-child-photography_b7qhv2.png'
                                name={t('Детский мир')}/>
                        </div>
                    </Link>
                }
                swiperContent6={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081949/sold%20commerce/png-transparent-computer-software-computer-icons-wallet-wallet-saving-service-payment_y678iu.png'
                                name={t('Бизнес и Услуги')}/>
                        </div>
                    </Link>
                }
                swiperContent7={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2'>
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Животные')}/>
                        </div>
                    </Link>
                }
                swiperContent8={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Мода и Стиль')}/>
                        </div>
                    </Link>
                }
                swiperContent9={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Дом и дача')}/>
                        </div>
                    </Link>
                }
                swiperContent10={
                    <Link href='/exchange'>
                        <div className='flex justify-center my-2' >
                            <Category
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                name={t('Хобби и Отдых')}/>
                        </div>
                    </Link>
                }
                swiperContent11={
                    <Link href='/exchange'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Обмен')}/>
                            </div>
                        </a>
                    </Link>
                }
                swiperContent12={
                    <Link href='/as-a-gift'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Отдам даром')}/>
                            </div>
                        </a>
                    </Link>
                }
            />

        </div>
    );
};

export default SlideCategory;