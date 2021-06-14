import React, {useState} from 'react';
import CategoryCard from "./CategoryCard";
import categoriesData from "../../categoryData";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {GrClose} from "react-icons/gr";
import DropdownContent from "./DropdownContent";

const Dropdown = () => {
    const {t, lang} = useTranslation();
    const [menus, setMenus] = useState(false)
    const [menu, setMenu] = useState(false)
    const [category, setCategory] = useState('')


    return (
        <div className='relative lg:block hidden mt-16 category-width mx-auto '>
            <div className=' mt-10 container mx-auto'>
                <div className='grid lg:grid-cols-6 grid-cols-3 dropdown'>
                    <div onClick={() => setMenu(true) && setMenus(false)} >
                        <div className='flex justify-center my-2' onClick={() => setCategory('electronic')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Электроника')}
                            />
                        </div>
                    </div>
                    <div onClick={() => setMenu(true) && setMenus(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('property')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081488/sold%20commerce/gotov_uh90qg.png'
                                name={t('Недвижимость')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true) && setMenus(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('vehicle')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                name={t('Транспорт')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true) && setMenus(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('children')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623082500/sold%20commerce/png-transparent-teddy-bear-gund-stuffed-toy-plush-plush-toy-blue-child-photography_b7qhv2.png'
                                name={t('Детский мир')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true) && setMenus(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('job')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Работа')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true) && setMenus(false)} >
                        <div className='flex justify-center my-2' onClick={() => setCategory('services')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081949/sold%20commerce/png-transparent-computer-software-computer-icons-wallet-wallet-saving-service-payment_y678iu.png'
                                name={t('Услуги')}/>
                        </div>
                    </div>
                </div>

                <div className={menu ? 'grid lg:grid-cols-6 grid-cols-3 mt-96' : 'grid lg:grid-cols-6 grid-cols-3'}
                    onClick={() => setMenu(false)}>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('business')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                name={t('Бизнес')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('style-fashion')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Мода и Стиль')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('house')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Дом и дача')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('hobbies')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Хобби и Отдых')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('animals')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Животные')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true) && setMenu(false)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('exchange')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Обмен / даром')}/>
                        </div>
                    </div>
                </div>


                {
                    menus  ?
                    <div>
                        <div
                            className='dropdown-content absolute top-90 search-width left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg  text-gray-500 text-md whitespace-nowrap' >
                            <div className='flex justify-between'>
                                <Link href='/electronic'>
                                    <a><p
                                        className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
                                        {lang === "ru" ? "Посмотреть все в категорие электроники" : "Elektronika bo'limining barcha e'lonlarini  ko'rish"}
                                    </p>
                                    </a>
                                </Link>
                                <div
                                    className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                    onClick={() => setMenu(false)}>
                                    <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
                                </div>
                            </div>


                            {
                                category === 'business' ?
                                categoriesData.business.map(item => (
                                   <DropdownContent item={item}/>
                                )) :
                                    category === 'style-fashion' ?
                                        categoriesData.stylefashion.map(item => (
                                            <DropdownContent item={item}/>
                                        )) :
                                        category === 'house' ?
                                            categoriesData.house.map(item => (
                                                <DropdownContent item={item}/>
                                            )) :
                                            category === 'hobbies' ?
                                                categoriesData.hobbies.map(item => (
                                                    <DropdownContent item={item}/>
                                                )) :
                                                category === 'animals' ?
                                                    categoriesData.animals.map(item => (
                                                        <DropdownContent item={item}/>
                                                    )) :
                                                    category === 'exchange' &&
                                                        categoriesData.exchange.map(item => (
                                                            <DropdownContent item={item}/>
                                                        )) 
                            }
                            </div>

                    </div>
                    :
                        menu  &&
                        <div>
                            <div
                                className= 'dropdown-content absolute top-40 search-width left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg  text-gray-500 text-md whitespace-nowrap' >
                                <div className='flex justify-between'>
                                    <Link href='/electronic'>
                                        <a><p
                                            className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
                                            {lang === "ru" ? "Посмотреть все в категорие электроники" : "Elektronika bo'limining barcha e'lonlarini  ko'rish"}
                                        </p>
                                        </a>
                                    </Link>
                                    <div
                                        className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                        onClick={() => setMenu(false)}>
                                        <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
                                    </div>
                                </div>


                                {
                                    category === 'electronic' ?
                                        categoriesData.electronic.map(item => (
                                            <DropdownContent item={item}/>
                                        )) :
                                        category === 'property' ?
                                            categoriesData.property.map(item => (
                                                <DropdownContent item={item}/>
                                            )) :
                                            category === 'vehicle' ?
                                                categoriesData.vehicle.map(item => (
                                                    <DropdownContent item={item}/>
                                                )) :
                                                category === 'children' ?
                                                    categoriesData.children.map(item => (
                                                        <DropdownContent item={item}/>
                                                    )) :
                                                    category === 'job' ?
                                                        categoriesData.job.map(item => (
                                                            <DropdownContent item={item}/>
                                                        )) :
                                                        category === 'services' &&
                                                            categoriesData.services.map(item => (
                                                                <DropdownContent item={item}/>
                                                            ))
                                }
                            </div>

                        </div>
                }


            </div>
        </div>

    );
};

export default Dropdown;