import React from 'react';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import CategoryCard from "./CategoryCard";


const MobileCategory = () => {
    const {t, lang} = useTranslation();
    return (

        <div className='lg:hidden grid grid-cols-4 gap-3  mt-6 m-3'>


                    <Link href='/electronic' className='m-5'>
                        <a>
                            <div className='flex justify-center '>
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Бытовая Электроника')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/vehicle' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                    name={t('Транспорт')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/job' className='m-5'>
                        <a>
                            <div className='flex justify-center '>
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Работа')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/property' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Недвижимость')}/>
                            </div>
                        </a>
                    </Link>


                    <Link href='/children' className='m-5'>
                        <a>
                            <div className='flex justify-center '>
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Для детей')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/services' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Услуги')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/animals' className='m-5'>
                        <a>
                            <div className='flex justify-center '>
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
                                    name={t('Животные')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/style-fashion' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Стиль')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/house' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Дом')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/hobbies' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Работа')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/exchange' className='m-5'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Обмен')}/>
                            </div>
                        </a>
                    </Link>

                    <Link href='/as-a-gift'>
                        <a>
                            <div className='flex justify-center ' >
                                <CategoryCard
                                    img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                    name={t('Отдам даром')}/>
                            </div>
                        </a>
                    </Link>


        </div>
    );
};

export default MobileCategory;