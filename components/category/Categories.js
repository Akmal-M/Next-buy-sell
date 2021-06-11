// import Category from "./Category";
// import useTranslation from "next-translate/useTranslation";
// import React, {useState} from "react";
// import Link from "next/link";
// import {GrClose} from "react-icons/gr";
// import MobileCategory from "./MobileCategory";
//
// const Categories = () => {
//     const {t, lang} = useTranslation();
//     const [category, setCategory] = useState('')
//     const [menu, setMenu] = useState(false)
//     const [menus, setMenus] = useState(false)
//
//     console.log(category)
//     console.log(menu)
//
//     const closeMenuHandler = () => {
//         setMenu(!menu)
//         setMenus(!menu)
//
//     }
//
//     const handleClick = () => {
//         setCategory(category)
//
//         setMenu(!menu)
//
//     }
//
//
//     return (
//         <div>
//             <div>
//
//                 {/*<div className='flex justify-center py-10 text-gray-800 text-5xl'>*/}
//                 {/*    <Link href='/all'>*/}
//                 {/*        <a>*/}
//                 {/*            <p>{t('Все Категории')}</p>*/}
//                 {/*        </a>*/}
//                 {/*    </Link>*/}
//                 {/*</div>*/}
//                 <div className='relative lg:block hidden mt-16'>
//
//
//                     <div className=' mt-10 container mx-auto'>
//                         <div className='grid lg:grid-cols-6 grid-cols-3 mb-16'>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('electronic')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Электроника')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('vehicle')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
//                                         name={t('Транспорт')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('job')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Работа')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('property')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081488/sold%20commerce/gotov_uh90qg.png'
//                                         name={t('Недвижимость')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('services')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081949/sold%20commerce/png-transparent-computer-software-computer-icons-wallet-wallet-saving-service-payment_y678iu.png'
//                                         name={t('Бизнес и Услуги')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenu(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('children')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623082500/sold%20commerce/png-transparent-teddy-bear-gund-stuffed-toy-plush-plush-toy-blue-child-photography_b7qhv2.png'
//                                         name={t('Детский мир')}/>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className={menu ? 'grid lg:grid-cols-6 grid-cols-3 mt-96' : 'grid lg:grid-cols-6 grid-cols-3'}
//                              onClick={() => setMenu(false)}>
//
//                             <div onClick={() => setMenus(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('style-fashion')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Мода и Стиль')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenus(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('house')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Дом и дача')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenus(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('hobbies')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Хобби и Отдых')}/>
//                                 </div>
//                             </div>
//                             <div onClick={() => setMenus(true)}>
//                                 <div className='flex justify-center my-2' onClick={() => setCategory('animals')}>
//                                     <Category
//                                         img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                         name={t('Животные')}/>
//                                 </div>
//                             </div>
//
//                             <Link href='/exchange' >
//                                 <a>
//                                     <div className='flex justify-center my-2' onClick={() => setCategory('exchange')}>
//                                         <Category
//                                             img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                             name={t('Обмен')}/>
//                                     </div>
//                                 </a>
//                             </Link>
//                             <Link href='/as-a-gift'>
//                                 <a>
//                                     <div className='flex justify-center my-2' onClick={() => setCategory('as-a-gift')}>
//                                         <Category
//                                             img='https://res.cloudinary.com/bulutvoy/image/upload/v1623013099/sold%20commerce/unnamed_rnzije.png'
//                                             name={t('Отдам даром')}/>
//                                     </div>
//                                 </a>
//                             </Link>
//                         </div>
//
//
//                         {
//                             menu &&
//                             <div>
//                                 {
//                                     category === 'electronic' ?
//                                         <div
//                                             className='absolute top-32 search-width left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg  text-gray-500 text-lg whitespace-nowrap'>
//
//                                             <div className='flex justify-between'>
//                                                 <Link href='/electronic'>
//                                                     <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                         {lang === "ru" ? "Посмотреть все в категорие электроники" : "Elektronika bo'limining barcha e'lonlarini  ko'rish"}
//                                                     </p>
//                                                     </a>
//                                                 </Link>
//                                                 <div
//                                                     className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                     onClick={() => setMenu(false)}>
//                                                     <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                 </div>
//                                             </div>
//
//                                             <div className='grid lg:grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/electronic/phones'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 hover:bg-gray-400 hover:text-white rounded-md pl-4'>{t('Телефоны')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/computers'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Компютеры')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/console'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Игры и Игровые приставки')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/electronic/home-tech'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Техника для дома')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/individual-care'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Индивидуальный уход')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/accessories'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Аксессуары и комплектующие')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/electronic/audio'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Аудиотехника')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/kitchen-tech'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Кухонные Оборудования')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/photo-video'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Фото / видео ')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/electronic/season-tech'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Климатические Оборудования')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/tv-video'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Тв / видео')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/electronic/other-electronics'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прочая электроника')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div> :
//
//                                         category === 'vehicle' ?
//                                             <div
//                                                 className='absolute search-width left-1/2 transform -translate-x-1/2 top-32 bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//                                                 <div className='flex justify-between'>
//                                                     <Link href='/vehicle'>
//                                                         <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                             {lang === "ru" ? "Посмотреть все в категорие транспорт" : "Transport bo'limining barcha e'lonlarini  ko'rish"}
//                                                         </p>
//                                                         </a>
//                                                     </Link>
//                                                     <div
//                                                         className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                         onClick={() => setMenu(false)}>
//                                                         <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                     </div>
//                                                 </div>
//
//                                                 <div
//                                                     className='grid grid-cols-4 gap-5 justify-center border-t border-gray-400 mb-5'>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/vehicle/car'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Легковые автомобили')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/spare-parts'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Автозапчасти и аксессуары')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/special-equipment'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Спецтехника')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/water-transport'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Водный транспорт')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/vehicle/truck'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Грузовые автомобили')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                             <Link href='/vehicle/agricultural-machinery'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Сельхозтехника')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/special-agricultural-machinery-parts'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Запчасти спец / с.х. техники')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/trailer'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прицепы')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                         </div>
//                                                     </div>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/vehicle/moto'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Мото')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/moto-parts'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Мотозапчасти и аксессуары')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/tires'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Шины, диски и колёса')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                         </div>
//                                                     </div>
//
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/vehicle/bus'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Автобусы')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/other-vehicles'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Другой транспорт')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/vehicle/other-spare-parts'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прочие запчасти')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//
//                                             </div> :
//
//                                             category === 'job' ?
//                                                 <div
//                                                     className='absolute search-width left-1/2 transform -translate-x-1/2 top-32 bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                     <div className='flex justify-between'>
//                                                         <Link href='/job'>
//                                                             <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                                 {lang === "ru" ? "Посмотреть все в категорие работа" : "Ish bo'limining barcha e'lonlarini  ko'rish"}
//                                                             </p></a>
//                                                         </Link>
//                                                         <div
//                                                             className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                             onClick={() => setMenu(false)}>
//                                                             <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                         </div>
//                                                     </div>
//
//                                                     <div
//                                                         className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                         <div className='mx-4  flex justify-center'>
//                                                             <div className='mx-4 '>
//                                                                 <Link href='/job/jurisprudence-and-accounting'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Юриспруденция и бухгалтерия')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/restaurants'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Рестораны / Кафе')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/retail-sale'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Продажа / Розничная Торговля ')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/education'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Образование')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/marketing-advertising-design'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Реклама / Маркетинг / Дизайн')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/manufacturing'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Производство / энергетика')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                             </div>
//                                                         </div>
//
//                                                         <div className='mx-4  flex justify-center'>
//                                                             <div className='mx-4 '>
//                                                                 <Link href='/job/it-computer-telecom'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('IT / компьютеры / телеком')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/fitness-beauty-sports'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Спорт / фитнес / красота')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/tourism-entertainment'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Туризм / отдых / развлечения')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/md-secretary'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('AХC / Секретариат')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/building'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Строительство')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                             </div>
//                                                         </div>
//                                                         <div className='mx-4  flex justify-center'>
//                                                             <div className='mx-4 '>
//                                                                 <Link href='/job/medicine-pharmacy'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Медицина / Фармация')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/service-and-life'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Сервис и быт')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/security'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Охрана и Безопасность')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/property'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Недвижимость')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/career-start'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Начало карьеры / Студенты')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                             </div>
//                                                         </div>
//                                                         <div className='mx-4  flex justify-center'>
//                                                             <div className='mx-4 '>
//                                                                 <Link href='/job/transport-logistics'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Транспорт / логистика')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/domestic-staff'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Домашний персонал')}</p>
//                                                                     </a>
//                                                                 </Link>
//
//                                                                 <Link href='/job/culture-art'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Культура / искусство')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/part-time'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Частичная занятость')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <Link href='/job/other-areas'>
//                                                                     <a>
//                                                                         <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Другие сферы')}</p>
//                                                                     </a>
//                                                                 </Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div> :
//
//                                                 category === 'property' ?
//
//
//                                                     <div
//                                                         className='absolute search-width left-1/2 transform -translate-x-1/2 top-32 bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                         <div className='flex justify-between'>
//                                                             <Link href='/property'>
//                                                                 <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                                     {lang === "ru" ? "Посмотреть все в категорие недвижимость" : "Ko'chmas mulk bo'limining barcha e'lonlarini  ko'rish"}
//                                                                 </p>
//                                                                 </a>
//                                                             </Link>
//                                                             <div
//                                                                 className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                                 onClick={() => setMenu(false)}>
//                                                                 <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                             </div>
//                                                         </div>
//
//                                                         <div
//                                                             className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                             <div className='mx-4  flex justify-center'>
//                                                                 <div className='mx-4 '>
//                                                                     <Link href='/property/flats'>
//                                                                         <a>
//                                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Квартиры')}</p>
//                                                                         </a>
//                                                                     </Link>
//                                                                     <Link href='/property/houses'>
//                                                                         <a>
//                                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Дома')}</p>
//                                                                         </a>
//                                                                     </Link>
//
//                                                                 </div>
//                                                             </div>
//
//                                                             <div className='mx-4  flex justify-center'>
//                                                                 <div className='mx-4 '>
//
//                                                                     <Link href='/property/commercial-use'>
//                                                                         <a>
//                                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Коммерческие помещения')}</p>
//                                                                         </a>
//                                                                     </Link>
//                                                                 </div>
//                                                             </div>
//                                                             <div className='mx-4  flex justify-center'>
//                                                                 <div className='mx-4 '>
//
//                                                                     <Link href='/property/area'>
//                                                                         <a>
//                                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Земля')}</p>
//                                                                         </a>
//                                                                     </Link>
//                                                                 </div>
//                                                             </div>
//                                                             <div className='mx-4  flex justify-center'>
//                                                                 <div className='mx-4 '>
//                                                                     <Link href='/property/garage'>
//                                                                         <a>
//                                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Гаражи / стоянки')}</p>
//                                                                         </a>
//                                                                     </Link>
//                                                                 </div>
//                                                             </div>
//
//
//                                                         </div>
//                                                     </div> :
//
//                                                     category === 'services' ?
//
//
//                                                         <div
//                                                             className='absolute search-width left-1/2 transform -translate-x-1/2 top-32 bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                             <div className='flex justify-between'>
//                                                                 <Link href='/services'>
//                                                                     <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                                         {lang === "ru" ? "Посмотреть все в категорие сервисы" : "Maishiy xizmat bo'limining barcha e'lonlarini  ko'rish"}
//                                                                     </p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <div
//                                                                     className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                                     onClick={() => setMenu(false)}>
//                                                                     <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                                 </div>
//                                                             </div>
//
//                                                             <div
//                                                                 className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/services/equipment'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Оборудование')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/selling-business'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Продажа бизнеса')}</p>
//                                                                             </a>
//                                                                         </Link>
//
//                                                                         <Link href='/services/repair'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Обслуживание, ремонт техники')}</p>
//                                                                             </a>
//                                                                         </Link>
//
//                                                                         <Link href='/services/sport-edu'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Образование / Спорт')}</p>
//                                                                             </a>
//                                                                         </Link>
//
//                                                                         <Link href='/services/rent-delivery'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Перевозки / аренда транспорта')}</p>
//                                                                             </a>
//                                                                         </Link>
//
//                                                                     </div>
//                                                                 </div>
//
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/services/jurisdiction'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Юридические услуги')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/translate-text'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('перевод / набор текста')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/tourism'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Туризм')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/auto-moto'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Авто / мото услуги')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/raw'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Сырьё / материалы')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/services/adv-poly-internet'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Реклама / полиграфия / интернет')}</p>
//                                                                             </a>
//                                                                         </Link>
//
//                                                                         <Link href='/services/babysitter'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Няни / сиделки')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/beauty-health'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Красота / здоровье')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/partner-finance'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Партнерство / Финансовые услуги')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/ent-art-pho'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Развлечения / Искусство / Фото')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/services/building-cleaning'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Строительство / ремонт / уборка')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/animals'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Услуги для животных')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/rent'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прокат товаров')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/services/others'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Другие услуги')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//
//
//                                                             </div>
//                                                         </div> :
//
//                                                         category === 'children' &&
//                                                         <div
//                                                             className='absolute search-width left-1/2 transform -translate-x-1/2 top-32 bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                             <div className='flex justify-between'>
//                                                                 <Link href='/children'>
//                                                                     <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                                         {lang === "ru" ? "Посмотреть все в категорие в детский мир" : "Bolalar dunyosi bo'limining barcha e'lonlarini  ko'rish"}
//                                                                     </p>
//                                                                     </a>
//                                                                 </Link>
//                                                                 <div
//                                                                     className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                                     onClick={() => setMenu(false)}>
//                                                                     <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                                 </div>
//                                                             </div>
//
//                                                             <div
//                                                                 className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/children/children-cloth'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детская одежда')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/children-shoes'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детская обувь')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/children-cart'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детские коляски')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/children/children-auto-seat'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детские автокресла')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/children-furniture'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детская мебель')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/children-toys'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Игрушки')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/children/children-vehicle'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Детский транспорт')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/feeding'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Кормление')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                         <Link href='/children/school-preparement'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Товары для школьников')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className='mx-4  flex justify-center'>
//                                                                     <div className='mx-4 '>
//                                                                         <Link href='/children/other-goods-for-children'>
//                                                                             <a>
//                                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прочие детские товары')}</p>
//                                                                             </a>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//
//
//                                                             </div>
//                                                         </div>
//
//                                 }
//                             </div>
//                         }
//                         {menus &&
//                         <div>
//                             {
//
//                                 category === 'style-fashion' ?
//                                     <div
//                                         className='absolute search-width left-1/2 transform -translate-x-1/2  bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                         <div className='flex justify-between'>
//                                             <Link href='/style-fashion'>
//                                                 <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                     {lang === "ru" ? "Посмотреть все в категорие мода и стиль" : "Moda va Stil bo'limining barcha e'lonlarini  ko'rish"}
//                                                 </p>
//                                                 </a>
//                                             </Link>
//                                             <div
//                                                 className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                 onClick={() => setMenus(false)}>
//                                                 <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                             </div>
//                                         </div>
//
//                                         <div
//                                             className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                             <div className='mx-4  flex justify-center'>
//                                                 <div className='mx-4 '>
//
//
//                                                     <Link href='/style-fashion/cloth-shoes'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Одежда/обувь')}</p>
//                                                         </a>
//                                                     </Link>
//                                                     <Link href='/style-fashion/wedding'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Для свадьбы')}</p>
//                                                         </a>
//                                                     </Link>
//
//                                                 </div>
//                                             </div>
//
//                                             <div className='mx-4  flex justify-center'>
//                                                 <div className='mx-4 '>
//                                                     <Link href='/style-fashion/accessories'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Аксессуары')}</p>
//                                                         </a>
//                                                     </Link>
//                                                     <Link href='/style-fashion/watches'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Наручные часы')}</p>
//                                                         </a>
//                                                     </Link>
//
//                                                 </div>
//                                             </div>
//                                             <div className='mx-4  flex justify-center'>
//                                                 <div className='mx-4 '>
//                                                     <Link href='/style-fashion/health-beauty'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Красота / здоровье')}</p>
//                                                         </a>
//                                                     </Link>
//                                                     <Link href='/style-fashion/other'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Мода разное')}</p>
//                                                         </a>
//                                                     </Link>
//
//                                                 </div>
//                                             </div>
//                                             <div className='mx-4  flex justify-center'>
//                                                 <div className='mx-4 '>
//                                                     <Link href='/style-fashion/gift'>
//                                                         <a>
//                                                             <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Подарки')}</p>
//                                                         </a>
//                                                     </Link>
//                                                 </div>
//                                             </div>
//
//
//                                         </div>
//                                     </div> :
//
//                                     category === 'house' ?
//                                         <div
//                                             className='absolute search-width left-1/2 transform -translate-x-1/2  bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                             <div className='flex justify-between'>
//                                                 <Link href='/house'>
//                                                     <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                         {lang === "ru" ? "Посмотреть все в категорие дом и сад" : "Uy va bog' bo'limining barcha e'lonlarini  ko'rish"}
//                                                     </p>
//                                                     </a>
//                                                 </Link>
//                                                 <div
//                                                     className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                     onClick={() => setMenus(false)}>
//                                                     <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                 </div>
//                                             </div>
//
//                                             <div
//
//
//                                                 className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/house/furniture'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Мебель')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/interior'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Предметы интерьера')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/inventory'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Инструменты')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/house/inventory-chemicals'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Хоз. инвентарь / бытовая химия')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/garden-equip'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Садовый инвентарь')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/kitchen'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Посуда / кухонная утварь')}</p>
//                                                             </a>
//                                                         </Link>
//
//                                                     </div>
//                                                 </div>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//                                                         <Link href='/house/food-drink'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Продукты питания / Напитки')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/plants'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Комнатные растения')}</p>
//                                                             </a>
//                                                         </Link>
//                                                         <Link href='/house/garden'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Сад / огород')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                                 <div className='mx-4  flex justify-center'>
//                                                     <div className='mx-4 '>
//
//
//                                                         <Link href='/house/build-materials'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Товары для строительства/ремонта')}</p>
//                                                             </a>
//                                                         </Link>
//
//                                                         <Link href='/house/materials'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Канцтовары / расходные материалы')}</p>
//                                                             </a>
//                                                         </Link>
//
//                                                         <Link href='/house/other'>
//                                                             <a>
//                                                                 <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Прочие товары для дома')}</p>
//                                                             </a>
//                                                         </Link>
//                                                     </div>
//
//
//                                                 </div>
//
//
//                                             </div>
//                                         </div> :
//
//                                         category === 'hobbies' ?
//                                             <div
//                                                 className='absolute search-width left-1/2 transform -translate-x-1/2  bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                 <div className='flex justify-between'>
//                                                     <Link href='/hobbies'>
//                                                         <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                             {lang === "ru" ? "Посмотреть все в категорие в хобби и отдых" : "Hobbi va dam olish bo'limining barcha e'lonlarini  ko'rish"}
//                                                         </p>
//                                                         </a>
//                                                     </Link>
//                                                     <div
//                                                         className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                         onClick={() => setMenus(false)}>
//                                                         <div className='bg-gray-400 p-3 rounded-md'><GrClose/></div>
//                                                     </div>
//                                                 </div>
//
//                                                 <div
//                                                     className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/hobbies/tickets'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Билеты')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='hobbies/music-instrument'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Музыкальные инструменты')}</p>
//                                                                 </a>
//                                                             </Link>
//
//
//                                                         </div>
//                                                     </div>
//
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/hobbies/books'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Книги / журналы')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/hobbies/collection'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Антиквариат / коллекции')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                         </div>
//                                                     </div>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/hobbies/cd'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('CD / DVD / пластинки / кассеты')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/hobbies/sport'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Спорт / отдых')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                         </div>
//                                                     </div>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/hobbies/other'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Другое')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//
//
//                                                 </div>
//                                             </div> :
//
//                                             category === 'animals' &&
//                                             <div
//                                                 className='absolute search-width left-1/2 transform -translate-x-1/2  bg-white shadow-2xl rounded-lg text-lg text-gray-500  whitespace-nowrap'>
//
//                                                 <div className='flex justify-between'>
//                                                     <Link href='/animals'>
//                                                         <a><p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'>
//                                                             {lang === "ru" ? "Посмотреть все в категорие в животные" : "Jonivorlar bo'limining barcha e'lonlarini  ko'rish"}
//                                                         </p>
//                                                         </a>
//                                                     </Link>
//                                                     <div
//                                                         className='flex justify-center items-center text-gray-800 mx-5 cursor-pointer'
//                                                         onClick={() => setMenus(false)}>
//                                                         <div className='bg-gray-400 p-3 rounded-md hover:bg-gray-300 text-white'><GrClose /></div>
//                                                     </div>
//                                                 </div>
//
//                                                 <div
//                                                     className='grid grid-cols-4 justify-center border-t border-gray-400 mb-5 '>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//
//
//
//
//
//
//
//
//
//
//                                                             <Link href='/animals/cats'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4 whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Кошки')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/animals/aquarium'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Аквариумистика')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/animals/birds'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Птицы')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/animals/dogs'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Собаки')}</p>
//                                                                 </a>
//                                                             </Link>
//
//                                                             <Link href='/animals/rodents'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Грызуны')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/animals/farm-animals'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Сельхоз животные')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/animals/zoo-animals'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Зоотовары')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/animals/found'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Бюро находок')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                             <Link href='/animals/as-a-gift'>
//                                                                 <a>
//
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Животные даром')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className='mx-4  flex justify-center'>
//                                                         <div className='mx-4 '>
//                                                             <Link href='/animals/others'>
//                                                                 <a>
//                                                                     <p className='my-4 cursor-pointer whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4'>{t('Другие животные')}</p>
//                                                                 </a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//
//
//                                                 </div>
//                                             </div>
//
//
//
//                             }
//                         </div>
//                         }
//
//
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     );
// }
// export default Categories;