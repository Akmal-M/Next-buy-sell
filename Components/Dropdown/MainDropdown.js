import React, {useState} from 'react';
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import categoriesData from "../../categoryData";
import {createStore,useStore} from "react-hookstore";

const MainDropdown = () => {
    const {t, lang} = useTranslation();
    const [category, setCategory] = useState('')
    // const [menu, setMenu] = useState(false)

    createStore('Menu', '');
    const [menu, setMenu] = useStore('Menu')

    // console.log(category)
    return (
        <div >
            <div
                className='flex items-center justify-center lg:px-40 lg:mt-0 mt-5 dropdown-menu bg-white  border-gray-300 lg:whitespace-nowrap'
                onClick={() => setMenu(!menu)}>
                <div
                    className='grid lg:flex md:grid-cols-6  grid-cols-3 lg:gap-1 gap-2 lg:text-left text-center lg:text-base text-sm lg:border-b lg:border-t border-gray-300'>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('electronic')}>
                        {t('Электроника')}
                    </div>

                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('children')}>
                        {t('Дети')}
                    </div>



                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('vehicle')}>
                        {t('Транспорт')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('property')}>
                        {t('Недвижимость')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('job')}>
                        {t('Работа')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('services')}>
                        {t('Услуги')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('style-fashion')}>
                        {t('Мода и Стиль')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('business')}>
                        {t('Бизнес')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('house')}>
                        {t('Дом и Дача')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('hobbies')}>
                        {t('Хобби и Отдых')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('animals')}>
                        {t('Животные')}
                    </div>


                    <div
                        className='lg:px-4 lg:border-r lg:border-gray-100 lg:py-3 lg:border-none  smooth-shadow lg:shadow-none lg:bg-white bg-purple-100  rounded-md  text-gray-700 border-rounded-md hover:bg-white cursor-pointer hover:border-gray-500 border-transparent  delay-100 py-2  '
                        onMouseOver={() => setCategory('exchange')}>
                        {t('Обмен / Даром')}
                    </div>

                </div>


                {
                    menu &&
                    <div
                        className="container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dropdown-menu-content bg-white absolute z-20 lg:top-72 top-28 lg:h-64 h-96 lg:shadow hidden swiper-slide-shadow-bottom lg:text-base text-xs text-gray-800 left-0 w-full ">
                        <div
                            className={'m-2 lg:mt-5 py-2 bg-gray-300 rounded-md lg:hidden flex w-20 text-center justify-center'}
                            onClick={() => setMenu(!menu)}>
                            {t('Назад')}
                        </div>
                        {
                            category === 'electronic' &&
                            <div className='flex justify-center'>
                                <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5 '>
                                    {categoriesData.electronic.map(item => (
                                        <div key={item.name} className=' '>
                                            <div className='   mb-3'>

                                                <div className='lg:mx-4 '>
                                                    <Link href={item.link}>
                                                        <a className=''>
                                                            <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                                {t(`${item.name}`)}
                                                            </p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        }
                        {category === 'business' &&
                        <div className='lg:grid lg:grid-cols-4 grid-cols-2 grid '>
                            {categoriesData.business.map(item => (
                                <div key={item.name} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'children' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.children.map(item => (
                                <div key={item.name} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'exchange' &&
                        <div className='flex lg:justify-end'>
                            <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                                {categoriesData.exchange.map(item => (
                                    <div key={item.name} className='  '>
                                        <div className='   mb-3'>

                                            <div className='lg:mx-4 '>
                                                <Link href={item.link}>
                                                    <a>
                                                        <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                            {t(`${item.name}`)}
                                                        </p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                        }
                        {category === 'hobbies' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.hobbies.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>}
                        {category === 'house' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.house.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>
                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'job' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.job.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'property' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.property.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'services' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.services.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='mb-3'>
                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'animals' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.animals.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}

                        {category === 'style-fashion' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.stylefashion.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>

                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>}
                        {category === 'vehicle' &&
                        <div className='lg:grid-cols-4 grid-cols-2 grid lg:py-5 pb-5  '>
                            {categoriesData.vehicle.map(item => (
                                <div key={item.link} className=' '>
                                    <div className='   mb-3'>
                                        <div className='lg:mx-4 '>
                                            <Link href={item.link}>
                                                <a>
                                                    <p className='my-2 cursor-pointer lg:text-lg text-xs lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                        {t(`${item.name}`)}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        }

                    </div>

                }

            </div>
        </div>
    );
}
export default MainDropdown;