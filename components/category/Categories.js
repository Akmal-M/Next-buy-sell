import Category from "./category";
import useTranslation from "next-translate/useTranslation";
import React, {useState} from "react";
import Link from "next/link";
import {GrClose} from "react-icons/gr";

const Categories = () => {
    const {t, lang} = useTranslation();
    const [category, setCategory] = useState('')
    const [menu, setMenu] = useState(false)
    const [menus, setMenus] = useState(false)

    console.log(category)
    console.log(menu)

    const closeMenuHandler = () => {
        setMenu(false)
        setMenu(false)

    }

    const handleClick = () => {
        setCategory(category)

        setMenu(!menu)

    }


    return (
        <div>
            <div className='flex justify-center pt-10 text-gray-800 text-5xl'>
                <Link href='/all'>
                    <a>
                        <p>{t('Все Категории')}</p>
                    </a>
                </Link>
            </div>
            <div className='relative'>


                <div className='max-w-5xl my-10 container mx-auto'>
                    <div className='grid lg:grid-cols-5 mb-10'>
                        <div onClick={() => setMenu(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('electronic')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Электроника')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenu(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('vehicle')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Транспорт')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenu(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('job')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Работа')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenu(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('property')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Недвижимость')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenu(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('services')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Услуги')}/>
                            </div>
                        </div>
                    </div>

                    <div className={menu ? 'grid lg:grid-cols-5 mt-96' : 'grid lg:grid-cols-5'}
                         onClick={() => setMenu(false)}>

                        <div onClick={() => setMenus(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('business')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Бизнес и Оборудование')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenus(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('house')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Дом и дача')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenus(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('hobbies')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Хобби и Отдых')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenus(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('animals')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Животные')}/>
                            </div>
                        </div>
                        <div onClick={() => setMenus(true)}>
                            <div className='flex justify-center my-2' onClick={() => setCategory('children')}>
                                <Category
                                    img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
                                    name={t('Детский мир')}/>
                            </div>
                        </div>
                    </div>


                    {
                        menu &&
                        <div>
                            {
                                category === 'electronic' ?
                                    <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg  text-gray-500 text-md whitespace-nowrap'>

                                        <div className='flex justify-between'>
                                            <Link href='/electronic'>
                                                <a><p className='m-5 cursor-pointer'>
                                                    {lang === "ru" ? "Посмотреть все в категорие электроники" : "Elektronika bo'limining barcha e'lonlari"}
                                                </p>
                                                </a>
                                            </Link>
                                            <div
                                                className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                onClick={() => setMenu(false)}>
                                                <GrClose/>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/electronic/phones'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Телефоны')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/computers'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Компютеры')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/console'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Игры и Игровые приставки')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/electronic/home-tech'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Техника для дома')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/individual-care'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Индивидуальный уход')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/accessories'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Аксессуары и комплектующие')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/electronic/audio'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Аудиотехника')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/kitchen-tech'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Кухонные Оборудования')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/photo-video'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Фото / видео ')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/electronic/season-tech'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Климатические Оборудования')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/tv-video'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Тв / видео')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/electronic/other-electronics'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Прочая электроника')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :

                                    category === 'vehicle' ?
                                        <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                            <div className='flex justify-between'>
                                                <Link href='/vehicle'>
                                                    <a><p className='m-5 cursor-pointer'>
                                                        {lang === "ru" ? "Посмотреть все в категорие транспорт" : "Transport bo'limining barcha e'lonlari"}
                                                    </p>
                                                    </a>
                                                </Link>
                                                <div
                                                    className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                    onClick={() => setMenu(false)}>
                                                    <GrClose/>
                                                </div>
                                            </div>

                                            <div
                                                className='grid grid-cols-4 gap-5 justify-center border-t border-gray-400 '>
                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/vehicle/car'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Легковые автомобили')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/spare-parts'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Автозапчасти и аксессуары')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/special-equipment'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Спецтехника')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/water-transport'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Водный транспорт')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/vehicle/truck'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Грузовые автомобили')}</p>
                                                            </a>
                                                        </Link>

                                                        <Link href='/vehicle/agricultural-machinery'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Сельхозтехника')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/special-agricultural-machinery-parts'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Запчасти спец / с.х. техники')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/trailer'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Прицепы')}</p>
                                                            </a>
                                                        </Link>

                                                    </div>
                                                </div>
                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/vehicle/moto'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Мото')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/moto-parts'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Мотозапчасти и аксессуары')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/tires'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Шины, диски и колёса')}</p>
                                                            </a>
                                                        </Link>

                                                    </div>
                                                </div>

                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/vehicle/bus'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Автобусы')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/other-vehicles'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Другой транспорт')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/vehicle/other-spare-parts'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Прочие запчасти')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div> :

                                        category === 'job' ?
                                            <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                                <div className='flex justify-between'>
                                                    <Link href='/job'>
                                                        <a><p className='m-5 cursor-pointer'>
                                                            {lang === "ru" ? "Посмотреть все в категорие работа" : "Ish bo'limining barcha e'lonlari"}
                                                        </p></a>
                                                    </Link>
                                                    <div
                                                        className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                        onClick={() => setMenu(false)}>
                                                        <GrClose/>
                                                    </div>
                                                </div>

                                                <div
                                                    className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children-cloth'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-shoes'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/job/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/children-vehicle'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/school-preparement'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/job/other-goods-for-children'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/job/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div> :

                                            category === 'property' ?
                                                <div
                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                                    <div className='flex justify-between'>
                                                        <Link href='/property'>
                                                            <a><p className='m-5 cursor-pointer'>
                                                                {lang === "ru" ? "Посмотреть все в категорие недвижимость" : "Ko'chmas mulk bo'limining barcha e'lonlari"}
                                                            </p>
                                                            </a>
                                                        </Link>
                                                        <div
                                                            className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                            onClick={() => setMenu(false)}>
                                                            <GrClose/>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/children-cloth'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/children-shoes'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/children-cart'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/property/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/property/children-vehicle'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/feeding'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/property/school-preparement'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/property/other-goods-for-children'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div> :

                                                category === 'services' &&
                                                <div
                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                                    <div className='flex justify-between'>
                                                        <Link href='/services'>
                                                            <a><p className='m-5 cursor-pointer'>
                                                                {lang === "ru" ? "Посмотреть все в категорие сервисы" : "Maishiy xizmat bo'limining barcha e'lonlari"}
                                                            </p>
                                                            </a>
                                                        </Link>
                                                        <div
                                                            className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                            onClick={() => setMenu(false)}>
                                                            <GrClose/>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/children-cloth'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/children-shoes'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/children-cart'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/services/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/children-auto-seat'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/services/children-vehicle'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/feeding'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                    </a>
                                                                </Link>
                                                                <Link href='/services/school-preparement'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className='m-4  flex justify-center'>
                                                            <div className='m-4 '>
                                                                <Link href='/services/other-goods-for-children'>
                                                                    <a>
                                                                        <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                            }
                        </div>
                    }
                    {menus &&
                    <div>
                        {

                            category === 'business' ?
                                <div
                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-96 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                    <div className='flex justify-between'>
                                        <Link href='/business'>
                                            <a><p className='m-5 cursor-pointer'>
                                                {lang === "ru" ? "Посмотреть все в категорие бизнес и оборудование" : "Biznes va uskunalar bo'limining barcha e'lonlari"}
                                            </p>
                                            </a>
                                        </Link>
                                        <div
                                            className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                            onClick={() => setMenus(false)}>
                                            <GrClose/>
                                        </div>
                                    </div>

                                    <div
                                        className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <Link href='/children-cloth'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/children-shoes'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/children-cart'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <Link href='/business/children-auto-seat'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/children-auto-seat'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/children-auto-seat'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <Link href='/business/children-vehicle'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/feeding'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                    </a>
                                                </Link>
                                                <Link href='/business/school-preparement'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <Link href='/business/other-goods-for-children'>
                                                    <a>
                                                        <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                </div> :

                                category === 'house' ?
                                    <div
                                        className='absolute search-width left-1/2 transform -translate-x-1/2 top-96 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                        <div className='flex justify-between'>
                                            <Link href='/house'>
                                                <a><p className='m-5 cursor-pointer'>
                                                    {lang === "ru" ? "Посмотреть все в категорие дом и сад" : "Uy va bog' bo'limining barcha e'lonlari"}
                                                </p>
                                                </a>
                                            </Link>
                                            <div
                                                className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                onClick={() => setMenus(false)}>
                                                <GrClose/>
                                            </div>
                                        </div>

                                        <div
                                            className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/children-cloth'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/children-shoes'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/children-cart'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/house/children-auto-seat'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/children-auto-seat'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/children-auto-seat'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/house/children-vehicle'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/feeding'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                        </a>
                                                    </Link>
                                                    <Link href='/house/school-preparement'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='m-4  flex justify-center'>
                                                <div className='m-4 '>
                                                    <Link href='/house/other-goods-for-children'>
                                                        <a>
                                                            <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>


                                        </div>
                                    </div> :

                                    category === 'hobbies' ?
                                        <div
                                            className='absolute search-width left-1/2 transform -translate-x-1/2 top-96 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                            <div className='flex justify-between'>
                                                <Link href='/hobbies'>
                                                    <a><p className='m-5 cursor-pointer'>
                                                        {lang === "ru" ? "Посмотреть все в категорие в хобби и отдых" : "Hobbi va dam olish bo'limining barcha e'lonlari"}
                                                    </p>
                                                    </a>
                                                </Link>
                                                <div
                                                    className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                    onClick={() => setMenus(false)}>
                                                    <GrClose/>
                                                </div>
                                            </div>

                                            <div
                                                className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/children-cloth'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/children-shoes'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/children-cart'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/hobbies/children-auto-seat'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/children-auto-seat'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/children-auto-seat'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/hobbies/children-vehicle'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/feeding'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                            </a>
                                                        </Link>
                                                        <Link href='/hobbies/school-preparement'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='m-4  flex justify-center'>
                                                    <div className='m-4 '>
                                                        <Link href='/hobbies/other-goods-for-children'>
                                                            <a>
                                                                <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </div> :

                                        category === 'animals' ?
                                            <div
                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-96 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                                <div className='flex justify-between'>
                                                    <Link href='/animals'>
                                                        <a><p className='m-5 cursor-pointer'>
                                                            {lang === "ru" ? "Посмотреть все в категорие в животные" : "Jonivorlar bo'limining barcha e'lonlari"}
                                                        </p>
                                                        </a>
                                                    </Link>
                                                    <div
                                                        className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                        onClick={() => setMenus(false)}>
                                                        <GrClose/>
                                                    </div>
                                                </div>

                                                <div
                                                    className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children-cloth'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/children-shoes'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/animals/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/animals/children-vehicle'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/animals/school-preparement'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/animals/other-goods-for-children'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div> :

                                            category === 'children' &&
                                            <div
                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-96 bg-white shadow-lg text-md text-gray-500  whitespace-nowrap'>

                                                <div className='flex justify-between'>
                                                    <Link href='/children'>
                                                        <a><p className='m-5 cursor-pointer'>
                                                            {lang === "ru" ? "Посмотреть все в категорие в детский мир" : "Bolalar dunyosi bo'limining barcha e'lonlari"}
                                                        </p>
                                                        </a>
                                                    </Link>
                                                    <div
                                                        className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
                                                        onClick={() => setMenus(false)}>
                                                        <GrClose/>
                                                    </div>
                                                </div>

                                                <div
                                                    className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children-cloth'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer whitespace-nowrap'>{t('Детская одежда')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/children-shoes'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская обувь')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/children-cart'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские коляски')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children/children-auto-seat'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детские автокресла')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/children-furniture'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детская мебель')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/toys'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Игрушки')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children/children-vehicle'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Детский транспорт')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/feeding'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Кормление')}</p>
                                                                </a>
                                                            </Link>
                                                            <Link href='/children/school-preparement'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Товары для школьников')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='m-4  flex justify-center'>
                                                        <div className='m-4 '>
                                                            <Link href='/children/other-goods-for-children'>
                                                                <a>
                                                                    <p className='my-5 cursor-pointer'>{t('Прочие детские товары')}</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>


                        }
                    </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Categories;