import React from 'react';
import SwiperSliderForAll from "../swiper";
import Category from "./category";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";


const MobileCategory = () => {
    const {t, lang} = useTranslation();
    return (

        <div className='lg:hidden grid grid-cols-4'>


                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2'>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Электроника')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                    name={t('Транспорт')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2'>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Работа')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081488/sold%20commerce/gotov_uh90qg.png'
                                    name={t('Недвижимость')}/>
                            </div>
                        </a>
                    </Link>


                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2'>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623082500/sold%20commerce/png-transparent-teddy-bear-gund-stuffed-toy-plush-plush-toy-blue-child-photography_b7qhv2.png'
                                    name={t('Детский мир')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081949/sold%20commerce/png-transparent-computer-software-computer-icons-wallet-wallet-saving-service-payment_y678iu.png'
                                    name={t('Бизнес и Услуги')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2'>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Животные')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Мода и Стиль')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Дом и дача')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Хобби и Отдых')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Обмен')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/as-a-gift'>
                        <a>
                            <div className='flex justify-center my-2' >
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Отдам даром')}/>
                            </div>
                        </a>
                    </Link>


        </div>
    );
};

export default MobileCategory;