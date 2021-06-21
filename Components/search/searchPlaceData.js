import React, {useState} from 'react';
import {GoLocation} from "react-icons/go";
import useTranslation from "next-translate/useTranslation";
import location from "../../location";
import { createStore, useStore } from 'react-hookstore';

createStore('cityStore', '');
createStore('districtStore', '');
const SearchPlaceData = () => {
    const {t, lang} = useTranslation();
    const [menu, setMenu] = useState(false)
    // const [city, setCity] = useState('')
    const [ city, setCity ] = useStore('cityStore');
    const [ district, setDistrict ] = useStore('districtStore');



    // console.log(menu)
    // console.log(district)
    // console.log(city)

    const searchDistrict = () => {
        setDistrict(district)
        setCity('')
        setMenu(!menu)
    }
    const searchDistrictCity = () => {
        setDistrict(district)
        setCity('')
        setMenu(!menu)
    }
    return (
        <div className='lg:flex flex items-center text-left'>
            <GoLocation className='lg:text-2xl mx-2'/>
            {
                !menu ?
                    <p className='lg:text-lg text-xs whitespace-nowrap' onClick={() => setMenu(!menu)}>
                        {district === 'all' &&
                        `${t('Весь Узбекистан')}` ||
                        district === 'samarkand' &&
                        `${(city)} ${t('Самаркандская область')}` ||
                        district === 'andijan' &&
                        `${city} ${t('Андижанская область')}` ||
                        district === 'buhara' &&
                        `${city} ${t('Бухарская область')}` ||
                        district === 'jizakh' &&
                        `${city} ${t('Жизакская область')}` ||
                        district === 'karakalpak' &&
                        `${city} ${t('Каракалпакстан')}` ||
                        district === 'kashkadarya' &&
                        `${city} ${t('Кашкадарьинская область')}` ||
                        district === 'navai' &&
                        `${city} ${t('Наваийская область')}` ||
                        district === 'namangan' &&
                        `${city} ${t('Наманганская область')}` ||
                        district === 'surkhandarya' &&
                        `${city} ${t('Сурханьдарьинская область')}` ||
                        district === 'sirdarya' &&
                        `${city} ${t('Сырдарьинская область')}` ||
                        district === 'tashkent' &&
                        `${city} ${t('Ташкентская область')}` ||
                        district === 'ferghana' &&
                        `${city} ${t('Ферганская область')}` ||
                        district === 'khorezm' &&
                        `${city} ${t('Хорезмская область')}`}
                    </p> : <p className='text-xs lg:text-xl whitespace-nowrap text-white'
                              onClick={() => setMenu(!menu)}>{t('Весь Узбекистан')}</p>


            }
            {
                menu &&
                <div>
                    {district === 'all' ?
                        <div
                            className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg lg:text-lg text-xs'>
                            <div className='flex justify-between'>
                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                   onClick={() => setMenu(!menu)}>
                                    {lang === 'uz' && <p>Butun O'zbekiston</p>}
                                    {lang === 'oz' && <p>Бутун Узбекистон</p>}
                                    {lang === 'ru' && <p>Весь Узбекистан</p>}
                                </p>
                            </div>
                            <div className='grid lg:grid-cols-4 grid-cols-2 justify-center border-t border-gray-400 '>
                                <div className='lg:m-4  flex justify-center'>
                                    <div className='lg:m-4 '>
                                        <p className='my-5 cursor-pointer whitespace-nowrap'
                                           onClick={() => setDistrict('andijan')}>
                                            {lang === 'uz' && <p>Andijon viloyati</p>}
                                            {lang === 'oz' && <p>Андижон вилояти</p>}
                                            {lang === 'ru' && <p>Андижанская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('buhara')}>
                                            {lang === 'uz' && <p>Buxoro viloyati</p>}
                                            {lang === 'oz' && <p>Бухоро вилояти</p>}
                                            {lang === 'ru' && <p>Бухарская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('jizakh')}>
                                            {lang === 'uz' && <p>Jizzax viloyati</p>}
                                            {lang === 'oz' && <p>Жиззах вилояти</p>}
                                            {lang === 'ru' && <p>Джизакская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('karakalpak')}>
                                            {lang === 'uz' && <p>Qoraqalpog'iston</p>}
                                            {lang === 'oz' && <p>Коракалпогистон</p>}
                                            {lang === 'ru' && <p>Каракалпакстан</p>}
                                        </p>
                                    </div>
                                </div>
                                <div className='lg:m-4  flex justify-center'>
                                    <div className='lg:m-4'>
                                        <p className='my-5 cursor-pointer whitespace-nowrap'
                                           onClick={() => setDistrict('kashkadarya')}>
                                            {lang === 'uz' && <p>Qashqadaryo viloyati</p>}
                                            {lang === 'oz' && <p>Кашкадаре вилояти</p>}
                                            {lang === 'ru' && <p>Кашкадарьинская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('navai')}>
                                            {lang === 'uz' && <p>Navoiy viloyati</p>}
                                            {lang === 'oz' && <p>Навоий вилояти</p>}
                                            {lang === 'ru' && <p>Навоийская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('namangan')}>
                                            {lang === 'uz' && <p>Namangan viloyati</p>}
                                            {lang === 'oz' && <p>Наманган вилояти</p>}
                                            {lang === 'ru' && <p>Наманганская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('samarkand')}>
                                            {lang === 'uz' && <p>Samarqand viloyati</p>}
                                            {lang === 'oz' && <p>Самарканд вилояти</p>}
                                            {lang === 'ru' && <p>Самаркандская область</p>}
                                        </p>
                                    </div>
                                </div>
                                <div className='lg:m-4  flex justify-center'>
                                    <div className='lg:m-4'>

                                        <p className='my-5 lg:flex hidden cursor-pointer whitespace-nowrap'
                                           onClick={() => setDistrict('surkhandarya')}>
                                            {lang === 'uz' && <p>Surxondaryo viloyati</p>}
                                            {lang === 'oz' && <p>Сурхондаре вилояти</p>}
                                            {lang === 'ru' && <p>Сурхандарьинская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer whitespace-nowrap'
                                           onClick={() => setDistrict('sirdarya')}>
                                            {lang === 'uz' && <p>Sirdaryo viloyati</p>}
                                            {lang === 'oz' && <p>Сирдаре вилояти</p>}
                                            {lang === 'ru' && <p>Сырдарьинская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('tashkent')}>
                                            {lang === 'uz' && <p>Toshkent viloyati</p>}
                                            {lang === 'oz' && <p>Тошкент вилояти</p>}
                                            {lang === 'ru' && <p>Ташкентская область</p>}
                                        </p>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('ferghana')}>
                                            {lang === 'uz' && <p>Farg'ona viloyati</p>}
                                            {lang === 'oz' && <p>Фаргона вилояти</p>}
                                            {lang === 'ru' && <p>Ферганская область</p>}
                                        </p>
                                    </div>
                                </div>
                                <div className='lg:m-4  flex justify-center'>
                                    <div className='lg:m-4'>
                                        <p className='my-5 cursor-pointer'
                                           onClick={() => setDistrict('khorezm')}>
                                            {lang === 'uz' && <p>Xorazm viloyati</p>}
                                            {lang === 'oz' && <p>Хоразм вилояти</p>}
                                            {lang === 'ru' && <p>Хорезмская область</p>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        district === 'samarkand' ?
                            <div
                                className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                <div className='flex justify-between'>
                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300 bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                       onClick={() => setDistrict('all')}>
                                        {t('common:Выбрать другой регион')}
                                    </p>
                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300 bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                       onClick={searchDistrict}>{t('Искать весь Самаркандскую область')}</p>
                                </div>
                                <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                    {location[0].samarkand.map(item => (
                                        <div key={item.id}>
                                            <div className='lg:m-4  flex justify-center'>
                                                <div>
                                                    <p className=' cursor-pointer'
                                                       onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                        {lang === 'uz' && <p>{item.name_uz}</p>}
                                                        {lang === 'oz' && <p>{item.name_oz}</p>}
                                                        {lang === 'ru' && <p>{item.name_ru}</p>}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> :
                            district === 'andijan' ?
                                <div
                                    className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                    <div className='flex justify-between'>
                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                           onClick={searchDistrict}>{t('Искать весь Андижанскую область')}</p>
                                    </div>
                                    <div
                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                        {location[0].andijan.map(item => (
                                            <div key={item.id}>
                                                <div className='lg:m-2  flex justify-center '>
                                                    <div>
                                                        <p className='cursor-pointer '
                                                           onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                            {lang === 'uz' && <p>{item.name_uz}</p>}
                                                            {lang === 'oz' && <p>{item.name_oz}</p>}
                                                            {lang === 'ru' && <p>{item.name_ru}</p>}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> :
                                district === 'buhara' ?
                                    <div
                                        className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                        <div className='flex justify-between'>
                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                               onClick={searchDistrict}>{t('Искать весь Бухарскую область')}</p>
                                        </div>
                                        <div
                                            className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                            {location[0].buhara.map(item => (
                                                <div key={item.id}>
                                                    <div className='lg:m-2  flex justify-center '>
                                                        <div>
                                                            <p className='cursor-pointer '
                                                               onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                {lang === 'uz' && <p>{item.name_uz}</p>}
                                                                {lang === 'oz' && <p>{item.name_oz}</p>}
                                                                {lang === 'ru' && <p>{item.name_ru}</p>}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div> :
                                    district === 'jizakh' ?
                                        <div
                                            className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                            <div className='flex justify-between'>
                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                   onClick={searchDistrict}>{t('Искать весь Джизакскую область')}</p>
                                            </div>
                                            <div
                                                className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                {location[0].jizzakh.map(item => (
                                                    <div key={item.id}>
                                                        <div className='lg:m-2  flex justify-center '>
                                                            <div>
                                                                <p className='cursor-pointer '
                                                                   onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                    {lang === 'uz' && <p>{item.name_uz}</p>}
                                                                    {lang === 'oz' && <p>{item.name_oz}</p>}
                                                                    {lang === 'ru' && <p>{item.name_ru}</p>}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        :
                                        district === 'karakalpak' ?
                                            <div
                                                className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                <div className='flex justify-between'>
                                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                       onClick={searchDistrict}>{t('Искать весь Каракалпакстан')}</p>
                                                </div>
                                                <div
                                                    className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                    {location[0].karakalpakstan.map(item => (
                                                        <div key={item.id}>
                                                            <div className='lg:m-2  flex justify-center '>
                                                                <div>
                                                                    <p className='cursor-pointer '
                                                                       onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                        {lang === 'uz' && <p>{item.name_uz}</p>}
                                                                        {lang === 'oz' && <p>{item.name_oz}</p>}
                                                                        {lang === 'ru' && <p>{item.name_ru}</p>}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            :
                                            district === 'kashkadarya' ?
                                                <div
                                                    className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                    <div className='flex justify-between'>
                                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                           onClick={searchDistrict}>{t('Искать весь Кашкадарьинскую область')}</p>
                                                    </div>
                                                    <div
                                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                        {location[0].kashkadarya.map(item => (
                                                            <div key={item.id}>
                                                                <div className='lg:m-2  flex justify-center '>
                                                                    <div>
                                                                        <p className='cursor-pointer '
                                                                           onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                            {lang === 'uz' && <p>{item.name_uz}</p>}
                                                                            {lang === 'oz' && <p>{item.name_oz}</p>}
                                                                            {lang === 'ru' && <p>{item.name_ru}</p>}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    >
                                                </div>
                                                :
                                                district === 'navai' ?
                                                    <div
                                                        className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                        <div className='flex justify-between'>
                                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                               onClick={searchDistrict}>{t('Искать весь Навоийскую область')}</p>
                                                        </div>
                                                        <div
                                                            className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                            {location[0].navai.map(item => (
                                                                <div key={item.id}>
                                                                    <div className='lg:m-2  flex justify-center '>
                                                                        <div>
                                                                            <p className='cursor-pointer '
                                                                               onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                {lang === 'uz' && <p>{item.name_uz}</p>}
                                                                                {lang === 'oz' && <p>{item.name_oz}</p>}
                                                                                {lang === 'ru' && <p>{item.name_ru}</p>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    :
                                                    district === 'namangan' ?
                                                        <div
                                                            className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                            <div className='flex justify-between'>
                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                   onClick={searchDistrict}>{t('Искать весь Наманганскую область')}</p>
                                                            </div>
                                                            <div
                                                                className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                {location[0].namangan.map(item => (
                                                                    <div key={item.id}>
                                                                        <div className='lg:m-2  flex justify-center '>
                                                                            <div>
                                                                                <p className='cursor-pointer '
                                                                                   onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                    {lang === 'uz' &&
                                                                                    <p>{item.name_uz}</p>}
                                                                                    {lang === 'oz' &&
                                                                                    <p>{item.name_oz}</p>}
                                                                                    {lang === 'ru' &&
                                                                                    <p>{item.name_ru}</p>}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            >
                                                        </div>
                                                        :
                                                        district === 'surkhandarya' ?
                                                            <div
                                                                className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                                <div className='flex justify-between'>
                                                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                    <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                       onClick={searchDistrict}>{t('Искать весь Сурхандарьинскую область')}</p>
                                                                </div>
                                                                <div
                                                                    className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                    {location[0].surkhandarya.map(item => (
                                                                        <div key={item.id}>
                                                                            <div
                                                                                className='lg:m-2  flex justify-center '>
                                                                                <div>
                                                                                    <p className='cursor-pointer '
                                                                                       onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                        {lang === 'uz' &&
                                                                                        <p>{item.name_uz}</p>}
                                                                                        {lang === 'oz' &&
                                                                                        <p>{item.name_oz}</p>}
                                                                                        {lang === 'ru' &&
                                                                                        <p>{item.name_ru}</p>}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                >
                                                            </div>
                                                            :
                                                            district === 'sirdarya' ?
                                                                <div
                                                                    className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                                    <div className='flex justify-between'>
                                                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                        <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                           onClick={searchDistrict}>{t('Искать весь Сирдарьинскую область')}</p>
                                                                    </div>
                                                                    <div
                                                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                        {location[0].sirdarya.map(item => (
                                                                            <div key={item.id}>
                                                                                <div
                                                                                    className='lg:m-2  flex justify-center '>
                                                                                    <div>
                                                                                        <p className='cursor-pointer '
                                                                                           onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                            {lang === 'uz' &&
                                                                                            <p>{item.name_uz}</p>}
                                                                                            {lang === 'oz' &&
                                                                                            <p>{item.name_oz}</p>}
                                                                                            {lang === 'ru' &&
                                                                                            <p>{item.name_ru}</p>}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                :

                                                                district === 'tashkent' ?
                                                                    <div
                                                                        className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                                        <div className='flex justify-between'>
                                                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                            <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                               onClick={searchDistrict}>{t('Искать весь Ташкентскую область')}</p>
                                                                        </div>
                                                                        <div
                                                                            className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                            {location[0].tashkent.map(item => (
                                                                                <div key={item.id}>
                                                                                    <div
                                                                                        className='lg:m-2  flex justify-center '>
                                                                                        <div>
                                                                                            <p className='cursor-pointer '
                                                                                               onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                                {lang === 'uz' &&
                                                                                                <p>{item.name_uz}</p>}
                                                                                                {lang === 'oz' &&
                                                                                                <p>{item.name_oz}</p>}
                                                                                                {lang === 'ru' &&
                                                                                                <p>{item.name_ru}</p>}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    district === 'ferghana' ?
                                                                        <div
                                                                            className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                                            <div
                                                                                className='flex justify-between'>
                                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                                   onClick={searchDistrict}>{t('Искать весь Ферганскую область')}</p>
                                                                            </div>
                                                                            <div
                                                                                className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                                {location[0].fergana.map(item => (
                                                                                    <div key={item.id}>
                                                                                        <div
                                                                                            className='lg:m-2  flex justify-center '>
                                                                                            <div>
                                                                                                <p className='cursor-pointer '
                                                                                                   onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                                    {lang === 'uz' &&
                                                                                                    <p>{item.name_uz}</p>}
                                                                                                    {lang === 'oz' &&
                                                                                                    <p>{item.name_oz}</p>}
                                                                                                    {lang === 'ru' &&
                                                                                                    <p>{item.name_ru}</p>}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        district === 'khorezm' &&
                                                                        <div
                                                                            className='absolute w-full  left-1/2 transform -translate-x-1/2 lg:top-14  bg-white shadow-lg text-xs lg:text-xl'>
                                                                            <div
                                                                                className='flex justify-between'>
                                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                <p className='m-4 cursor-pointer bg-gray-400 rounded-md py-1 px-4 text-white hover:bg-gray-300'
                                                                                   onClick={searchDistrict}>{t('Искать весь Хорезмскую область')}</p>
                                                                            </div>
                                                                            <div
                                                                                className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400 lg:py-5 py-2 '>
                                                                                {location[0].khorezm.map(item => (
                                                                                    <div key={item.id}>
                                                                                        <div
                                                                                            className='lg:m-2  flex justify-center '>
                                                                                            <div>
                                                                                                <p className='cursor-pointer '
                                                                                                   onClick={() => setCity(item.name_uz) || setMenu(false)}>
                                                                                                    {lang === 'uz' &&
                                                                                                    <p>{item.name_uz}</p>}
                                                                                                    {lang === 'oz' &&
                                                                                                    <p>{item.name_oz}</p>}
                                                                                                    {lang === 'ru' &&
                                                                                                    <p>{item.name_ru}</p>}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>}
                </div>}
        </div>
    );
};

export default SearchPlaceData;