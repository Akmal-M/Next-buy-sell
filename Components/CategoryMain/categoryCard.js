import React, {useState} from 'react';
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import categoriesData from "../../categoryData";
import useTranslation from "next-translate/useTranslation";
import {useStore} from "react-hookstore";
import CategoryMenu from "./categoryMenu";

const CategoryCard = () => {
    const {t, lang} = useTranslation();
    const [category] = useStore('categoryStore')
    const [menu, setMenu] = useStore('menuStore')
    const [menus, setMenus] = useStore('menusStore')


 const categoryPicker = category === 'children' ? categoriesData.children
     : category === 'business' ? categoriesData.business
     : category === 'animals' ? categoriesData.animals
     : category === 'electronic' ? categoriesData.electronic
     : category === 'exchange' ? categoriesData.exchange
     : category === 'hobbies' ? categoriesData.hobbies
     : category === 'house' ? categoriesData.house
     : category === 'job' ? categoriesData.job
     : category === 'property' ? categoriesData.property
     : category === 'services' ? categoriesData.services
     : category === 'style-fashion' ? categoriesData.stylefashion
     : category === 'vehicle' && categoriesData.vehicle

    // console.log(category)
    // console.log(menus)
    // console.log(menu)
    return (

        <div>
            { menu &&
            <div
                className='lg:search-width w-full absolute lg:top-96 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg '>
                <div className='  flex justify-between border-b border-gray-400 '>
                    <Link href=''>
                        <a><p
                            className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
                            {lang === "ru" ? "Посмотреть все в категорие транспорт" : "Transport bo'limining barcha e'lonlarini  ko'rish"}
                        </p>
                        </a>
                    </Link>
                    <div
                        className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                        onClick={() => setMenu(!menu)}>
                        <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
                    </div>
                </div>

                <div
                    className=' text-md text-gray-500 lg:max-h-96 grid lg:grid-cols-4 grid-cols-2  lg:whitespace-nowrap'>

                    {category === 'children' &&
                    categoriesData.children.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'business' &&
                    categoriesData.business.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'animals' &&
                    categoriesData.animals.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'electronic' &&
                    categoriesData.electronic.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'exchange' &&
                    categoriesData.exchange.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'hobbies' &&
                    categoriesData.hobbies.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'house' &&
                    categoriesData.house.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'job' &&
                    categoriesData.job.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'property' &&
                    categoriesData.property.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'services' &&
                    categoriesData.services.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'style-fashion' &&
                    categoriesData.stylefashion.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {category === 'vehicle' &&
                    categoriesData.vehicle.map(item => (
                        <div key={item.link} className=' '>
                            <div  className='   mb-5'>
                                <div className='lg:mx-4   '>
                                    <div className='lg:mx-4 '>
                                        <Link href={item.link}>
                                            <a>
                                                <p className='my-4 cursor-pointer lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 lg:whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                                    {t(`${item.name}`)}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
            }
        </div>

    );
};

export default CategoryCard;