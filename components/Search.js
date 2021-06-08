import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import useTranslation from "next-translate/useTranslation";

const Search = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(false)
    const [district, setDistrict] = useState('all')
    const [city, setCity] = useState('')

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
        <div className='shadow  flex justify-center items-center z-40 relative text-gray-600 container mx-auto'>
            <div className='grid lg:grid-cols-9 grid-cols-3 bg-white lg:px-6 py-3 search-width '>



                <div className='lg:flex hidden  items-center col-span-3 '>
                    <GoLocation className='lg:text-4xl mx-2'/>
                    {
                        !menu ?
                            <p className='text-lg whitespace-nowrap' onClick={() => setMenu(!menu)}>
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
                            </p> : <p className='text-xl whitespace-nowrap text-white'
                                      onClick={() => setMenu(!menu)}>{t('Весь Узбекистан')}</p>


                    }
                    {
                        menu &&
                        <div>
                            {district === 'all' ?
                                <div
                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-lg'>
                                    <div
                                        className='flex justify-between'>
                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                           onClick={() => setMenu(!menu)}>{t('Весь Узбекистан')}</p>

                                    </div>
                                    <div className='grid lg:grid-cols-4 grid-cols-2 justify-center border-t border-gray-400 '>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <p className='my-5 cursor-pointer whitespace-nowrap'
                                                   onClick={() => setDistrict('andijan')}>{t('Андижанская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('buhara')}>{t('Бухарская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('jizakh')}>{t('Джизакская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('karakalpak')}>{t('Каракалпакстан')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer whitespace-nowrap'
                                                   onClick={() => setDistrict('kashkadarya')}>{t('Кашкадарьинская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('navai')}>Навоийская область</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('namangan')}>{t('Наманганская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('samarkand')}>{t('Самаркандская область')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer whitespace-nowrap'
                                                   onClick={() => setDistrict('surkhandarya')}>{t('Сурхандарьинская область')}</p>
                                                <p className='my-5 cursor-pointer whitespace-nowrap'
                                                   onClick={() => setDistrict('sirdarya')}>{t('Сырдарьинская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('tashkent')}>{t('Ташкентская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('ferghana')}>{t('Ферганская область')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('khorezm')}>{t('Хорезмская обл.')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                district === 'samarkand' ?
                                    <div
                                        className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                        <div className='flex justify-between'>
                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300 bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300 bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Самаркандскую область')}</p>
                                        </div>
                                        <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                            <div className='m-4  flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Oqtosh') || setMenu(false) }>{t('Акташ')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Bulung'ur") || setMenu(false) }>{t('Булунгур')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Chelak') || setMenu(false) }>{t('Чилек')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Darband') || setMenu(false) }>{t('Дарбанд')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Jomboy') || setMenu(false) }>{t('Джамбай')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Juma') || setMenu(false) }>{t('Джума')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Go'zalkent") || setMenu(false) }>{t('Гузалкент')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Gulobod') || setMenu(false) }>{t('Гюлабад')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Ishtixon') || setMenu(false) }>{t('Иштыхан')}</p>
                                                    <p className='my-5 cursor-pointer' onClick={() => setCity("Kattaqo'rg'on") || setMenu(false) }>{t('Каттакурган')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Qoshrobod') || setMenu(false) }>{t('Кушрабад')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Loyish') || setMenu(false) }>{t('Лаиш')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Nurobod') || setMenu(false) }>{t('Нурабад')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Payariq') || setMenu(false) }>{t('Пайарык')}</p>
                                                    <p className='my-5 cursor-pointer' onClick={() => setCity('Payshanba') || setMenu(false) }>{t('Пайшанба')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Samarqand') || setMenu(false) }>{t('Самарканд')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Toyloq') || setMenu(false) }>{t('Тайлак')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Urgut') || setMenu(false) }>{t('Ургут')}</p>
                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Ziyodin') || setMenu(false) }>{t('Зиадин')}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div> :
                                    district === 'andijan' ?
                                        <div
                                            className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                            <div className='flex justify-between'>
                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Андижанскую область')}</p>
                                            </div>
                                            <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                <div className='m-4  flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Oqoltin') || setMenu(false) }>{t('Акалтын')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Oltinko'l") || setMenu(false) }>{t('Алтынкуль')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Andijon') || setMenu(false) }>{t('Андижан')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Asaka') || setMenu(false) }>{t('Асака')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Oxunboboyev') || setMenu(false) }>{t('Ахунбабаев')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Baliqchi') || setMenu(false) }>{t('Балыкчи')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Bo'z") || setMenu(false) }>{t('Боз')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Buloqboshi') || setMenu(false) }>{t('Булакбаши')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Qorasuv') || setMenu(false) }>{t('Карасу')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Kuyganyor') || setMenu(false) }>{t('Куйганъяр')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Qo'rg'ontepa") || setMenu(false) }>{t('Кургантепа')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('marhamat') || setMenu(false) }>{t('Мархамат')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Poytug'") || setMenu(false) }>{t('Пайтуг')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Paxtaobod') || setMenu(false) }>{t('Пахтаабад')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Shahrixon') || setMenu(false) }>{t('Шахрихан')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Xonobod') || setMenu(false) }>{t('Ханабад')}</p>
                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Xo'jaobod") || setMenu(false) }>{t('Ходжаабад')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                        district === 'buhara' ?
                                            <div
                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                <div className='flex justify-between'>
                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Бухарскую область')}</p>
                                                </div>
                                                <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                    <div className='m-4  flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Olot') || setMenu(false) }>{t('Алат')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Buxoro') || setMenu(false) }>{t('Бухара')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Galaosiyo') || setMenu(false) }>{t('Галаасия')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Gazli') || setMenu(false) }>{t('Газли')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("G'ijduvon") || setMenu(false) }>{t('Гиждуван')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Kogon') || setMenu(false) }>{t('Каган')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Qorako'l") || setMenu(false) }>{t('Каракуль')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Qorovulbozor') || setMenu(false) }>{t('Караулбазар')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Romitan') || setMenu(false) }>{t('Ромитан')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Shofirkon') || setMenu(false) }>{t('Шафиркан')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Vobkent') || setMenu(false) }>{t('Вабкент')}</p>
                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Jondor') || setMenu(false) }>{t('Жондор')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> :
                                            district === 'jizakh' ?
                                                <div
                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                    <div className='flex justify-between'>
                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Джизакскую область')}</p>
                                                    </div>
                                                    <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                        <div className='m-4  flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Aydarko'l") || setMenu(false) }>{t('Айдаркуль')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Balandchaqir') || setMenu(false) }>{t('Баландчакир')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Dashtobod') || setMenu(false) }>{t('Даштобод')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Do'stlik") || setMenu(false) }>{t('Дустлик')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Jizzax') || setMenu(false) }>{t('Джизак')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Gagarin') || setMenu(false) }>{t('Гагарин')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("G'allaorol") || setMenu(false) }>{t('Галлаарал')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("G'oliblar") || setMenu(false) }>{t('Голиблар')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Marjonbuloq') || setMenu(false) }>{t('Марджанбулак')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Paxtakor') || setMenu(false) }>{t('Пахтакор')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Uchtepa') || setMenu(false) }>{t('Учтепа')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("O'smat") || setMenu(false) }>{t('Усмат')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Yangiqishloq") || setMenu(false) }>{t('Янгикишлак')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Zomin') || setMenu(false) }>{t('Заамин')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Zafarobod') || setMenu(false) }>{t('Зафарабад')}</p>
                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Zarbdor') || setMenu(false) }>{t('Зарбдар')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                district === 'karakalpak' ?
                                                    <div
                                                        className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                        <div className='flex justify-between'>
                                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Каракалпакстан')}</p>
                                                        </div>
                                                        <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                            <div className='m-4  flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Oqmang'it") || setMenu(false) }>{t('Акмангит')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Beruniy') || setMenu(false) }>{t('Беруни')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Bo'ston") || setMenu(false) }>{t('Бустан')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Chimboy') || setMenu(false) }>{t('Чимбай')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Qanliko'l") || setMenu(false) }>{t('Канлыкуль')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Qorao'zak") || setMenu(false) }>{t('Караузяк')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Kegeyli') || setMenu(false) }>{t('Кегейли')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Qo'ng'irot") || setMenu(false) }>{t('Кунград')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Mang'it") || setMenu(false) }>{t('Мангит')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Mo'ynoq") || setMenu(false) }>{t('Муйнак')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Nukus') || setMenu(false) }>{t('Нукус')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Shumanay') || setMenu(false) }>{t('Шуманай')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Taxiatosh') || setMenu(false) }>{t('Тахиаташ')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Taxtako'pir") || setMenu(false) }>{t('Тахтакупыр')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("To'rtko'l") || setMenu(false) }>{t('Турткуль')}</p>
                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Xo'jayli") || setMenu(false) }>{t('Ходжейли')}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    district === 'kashkadarya' ?
                                                        <div
                                                            className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                            <div className='flex justify-between'>
                                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Кашкадарьинскую область')}</p>
                                                            </div>
                                                            <div className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                <div className='m-4  flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Beshkent') || setMenu(false) }>{t('Бешкент')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Chiroqchi') || setMenu(false) }>{t('Чиракчи')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Dehqonobod') || setMenu(false) }>{t('Дехканабад')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("G'uzor") || setMenu(false) }>{t('Гузар')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Qamashi') || setMenu(false) }>{t('Камаши')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Karashina') || setMenu(false) }>{t('Карашина')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Qarshi') || setMenu(false) }>{t('Карши')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Koson') || setMenu(false) }>{t('Касан')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Kasbi') || setMenu(false) }>{t('Касби')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Kitob') || setMenu(false) }>{t('Китаб')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Muborak') || setMenu(false) }>{t('Мубарек')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Mug'lan") || setMenu(false) }>{t('Муглан')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Shahrisabz') || setMenu(false) }>{t('Шахрисабз')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Tolimarjon') || setMenu(false) }>{t('Талимарджан')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Yakkabog'") || setMenu(false) }>{t('Яккабаг')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangi-Mirishkor') || setMenu(false) }>{t('Янги Миришкор')}</p>
                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangi-Nishon') || setMenu(false) }>{t('Янги-Нишан')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        district === 'navai' ?
                                                            <div
                                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                <div className='flex justify-between'>
                                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Навоийскую область')}</p>
                                                                </div>
                                                                <div
                                                                    className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                    <div className='m-4  flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Beshrabot') || setMenu(false) }>{t('Бешрабат')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Konimeh') || setMenu(false) }>{t('Канимех')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Karmana') || setMenu(false) }>{t('Кармана')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Qiziltepa') || setMenu(false) }>{t('Кызылтепа')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Navoi') || setMenu(false) }>{t('Навои')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Nurota') || setMenu(false) }>{t('Нурата')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Tomdibuloq') || setMenu(false) }>{t('Тамдыбулак')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Uchquduq') || setMenu(false) }>{t('Учкудук')}</p>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangirabot') || setMenu(false) }>{t('Янгирабат')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Zarafshon') || setMenu(false) }>{t('Зарафшан')}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            district === 'namangan' ?
                                                                <div
                                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                    <div className='flex justify-between'>
                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Наманганскую область')}</p>
                                                                    </div>
                                                                    <div
                                                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                        <div className='m-4  flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Chortoq') || setMenu(false) }>{t('Чартак')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Chelak') || setMenu(false) }>{t('Челак')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Chust') || setMenu(false) }>{t('Чуст')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Jumashuy') || setMenu(false) }>{t('Джумашуй')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Kosonsoy') || setMenu(false) }>{t('Касансай')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Namangan') || setMenu(false) }>{t('Наманган')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Pop') || setMenu(false) }>{t('Пап')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Toshbuloq') || setMenu(false) }>{t('Ташбулак')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("To'raqo'rg'on") || setMenu(false) }>{t('Туракурган')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Uchqo'rg'on") || setMenu(false) }>{t('Учкурган')}</p>
                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Xaqqulobod') || setMenu(false) }>{t('Хаккулабад')}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                district === 'surkhandarya' ?
                                                                    <div
                                                                        className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                        <div className='flex justify-between'>
                                                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                            <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Сурхандарьинскую область')}</p>
                                                                        </div>
                                                                        <div
                                                                            className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                            <div
                                                                                className='m-4  flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Angor') || setMenu(false) }>{t('Ангор')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Boysun') || setMenu(false) }>{t('Байсун')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Bandixon') || setMenu(false) }>{t('Бандихон')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Denov') || setMenu(false) }>{t('Денау')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Jarqo'rg'on") || setMenu(false) }>{t('Джаркурган')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Qarluq') || setMenu(false) }>{t('Карлук')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Qiziriq') || setMenu(false) }>{t('Кизирик')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Qumqo'rg'on") || setMenu(false) }>{t('Кумкурган')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Muzrobod') || setMenu(false) }>{t('Музрабад')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Sariosiyo') || setMenu(false) }>{t('Сариасия')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Sariq') || setMenu(false) }>{t('Сарык')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Sharg'un") || setMenu(false) }>{t('Шаргунь')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Sherobod') || setMenu(false) }>{t('Шерабад')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity("Sho'rchi") || setMenu(false) }>{t('Шурчи')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Termiz') || setMenu(false) }>{t('Термез')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Uchqizil') || setMenu(false) }>{t('Учкызыл')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Uzun') || setMenu(false) }>{t('Узун')}</p>
                                                                                    <p className='my-5 cursor-pointer'  onClick={() => setCity('Xalqobod') || setMenu(false) }>{t('Халкабад')}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    district === 'sirdarya' ?
                                                                        <div
                                                                            className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                            <div className='flex justify-between'>
                                                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Сирдарьинскую область')}</p>
                                                                            </div>
                                                                            <div
                                                                                className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                                <div
                                                                                    className='m-4  flex justify-center'>
                                                                                    <div>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Baxt') || setMenu(false) }>{t('Бахт')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Boyovut') || setMenu(false) }>{t('Баяут')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Sirdaryo') || setMenu(false) }>{t('Cырдарья')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Guliston') || setMenu(false) }>{t('Гулистан')}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className='m-4 flex justify-center'>
                                                                                    <div>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity("Navro'z") || setMenu(false) }>{t('Навруз')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Sayhun') || setMenu(false) }>{t('Сайхун')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Sardoba') || setMenu(false) }>{t('Сардоба')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Shirin') || setMenu(false) }>{t('Ширин')}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className='m-4 flex justify-center'>
                                                                                    <div>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Sirdaryo') || setMenu(false) }>{t('Сырдарья')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Terinozik') || setMenu(false) }>{t('Теренозек')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Xovost') || setMenu(false) }>{t('Хаваст')}</p>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangiyer') || setMenu(false) }>{t('Янгиер')}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className='m-4 flex justify-center'>
                                                                                    <div>
                                                                                        <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangiyor') || setMenu(false) }>{t('Янгиёр')}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :

                                                                        district === 'tashkent' ?
                                                                            <div
                                                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                                <div className='flex justify-between'>
                                                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                    <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Ташкентскую область')}</p>
                                                                                </div>
                                                                                <div
                                                                                    className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                                    <div
                                                                                        className='m-4  flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Oqqo'rg'on") || setMenu(false) }>{t('Аккурган')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Olmaliq') || setMenu(false) }>{t('Алмалык')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Angren') || setMenu(false) }>{t('Ангрен')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Ohangaron') || setMenu(false) }>{t('Ахангаран')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Bekobod') || setMenu(false) }>{t('Бекабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Katta Chimyon') || setMenu(false) }>{t('Большой Чимган')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Bo'ka") || setMenu(false) }>{t('Бука')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Chorvoq') || setMenu(false) }>{t('Чарвак')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Chinoz') || setMenu(false) }>{t('Чиназ')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Chirchiq') || setMenu(false) }>{t('Чирчик')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("So'qoq") || setMenu(false) }>{t('Cукок')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Do'rmon") || setMenu(false) }>{t('Дурмень')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Do'stobod") || setMenu(false) }>{t('Дустабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Eshonguzar') || setMenu(false) }>{t('Эшангузар')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("G'azalkent") || setMenu(false) }>{t('Газалкент')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Gulbahor') || setMenu(false) }>{t('Гульбахор')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Iskandar') || setMenu(false) }>{t('Искандар')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Qorasuv') || setMenu(false) }>{t('Карасу')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Keles') || setMenu(false) }>{t('Келес')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Qibray') || setMenu(false) }>{t('Кибрай')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Ko'ksaroy") || setMenu(false) }>{t('Коксарай')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Krasnogorsk') || setMenu(false) }>{t('Красногорск')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Mirobod') || setMenu(false) }>{t('Мирабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Nazarbek') || setMenu(false) }>{t('Назарбек')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Nurafshon(To'ytepa)") || setMenu(false) }>{t('Нурафшан (Тойтепа)')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Parkent') || setMenu(false) }>{t('Паркент')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Pskent') || setMenu(false) }>{t('Пскент')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Salar') || setMenu(false) }>{t('Салар')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Toshkent') || setMenu(false) }>{t('Ташкент')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Tashmore') || setMenu(false) }>{t('Ташморе')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Turkiston') || setMenu(false) }>{t('Туркестан')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("O'rtaovul") || setMenu(false) }>{t('Уртааул')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Xojikent') || setMenu(false) }>{t('Ходжикент')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangiobod') || setMenu(false) }>{t('Янгиабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangibozor') || setMenu(false) }>{t('Янгибазар')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity("Yangiyo'l") || setMenu(false) }>{t('Янгиюль')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Zafar') || setMenu(false) }>{t('Зафар')}</p>
                                                                                            <p className='my-5 cursor-pointer'  onClick={() => setCity('Zangiota') || setMenu(false) }>{t('Зангиата')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            district === 'ferghana' ?
                                                                                <div
                                                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                                    <div
                                                                                        className='flex justify-between'>
                                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Ферганскую область')}</p>
                                                                                    </div>
                                                                                    <div
                                                                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                                        <div
                                                                                            className='m-4  flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Oltiariq') || setMenu(false) }>{t('Алтыарык')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Bog'dod") || setMenu(false) }>{t('Багдад')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Beshariq') || setMenu(false) }>{t('Бешарык')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Dang'ara") || setMenu(false) }>{t('Дангара')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Farg'ona") || setMenu(false) }>{t('Фергана')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Qo'qon") || setMenu(false) }>{t('Коканд')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Quva') || setMenu(false) }>{t('Кува')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Quvasoy') || setMenu(false) }>{t('Кувасай')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Langar') || setMenu(false) }>{t('Лангар')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Marg'ilon") || setMenu(false) }>{t('Маргилан')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Navbahor') || setMenu(false) }>{t('Навбахор')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Ravon') || setMenu(false) }>{t('Раван')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Rishton') || setMenu(false) }>{t('Риштан')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Shoximardon') || setMenu(false) }>{t('Шахимардан')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Toshloq') || setMenu(false) }>{t('Ташлак')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Uchko'prik") || setMenu(false) }>{t('Учкуприк')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Vodil') || setMenu(false) }>{t('Вуадиль')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Xamza') || setMenu(false) }>{t('Хамза')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Yaypan') || setMenu(false) }>{t('Яйпан')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Yangi Marg'ilon") || setMenu(false) }>{t('Янги Маргилан')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Yangiqo'rg'on") || setMenu(false) }>{t('Янгикурган')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Yozyovon') || setMenu(false) }>{t('Язъяван')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                                district === 'khorezm' &&
                                                                                <div
                                                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-lg text-xl'>
                                                                                    <div
                                                                                        className='flex justify-between'>
                                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300'
                                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                        <p className='m-5 cursor-pointer bg-gray-400 rounded-md py-2 px-4 text-white hover:bg-gray-300' onClick={searchDistrict}>{t('Искать весь Хорезмскую область')}</p>
                                                                                    </div>
                                                                                    <div
                                                                                        className='grid lg:grid-cols-4 grid-cols-2 border-t border-gray-400'>
                                                                                        <div
                                                                                            className='m-4  flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Bog'ot") || setMenu(false) }>{t('Багат')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Cholish') || setMenu(false) }>{t('Чалыш')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Gurlan') || setMenu(false) }>{t('Гурлен')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Qorovul') || setMenu(false) }>{t('Караул')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity("Qo'shko'pir") || setMenu(false) }>{t('Кошкупыр')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Pitnak') || setMenu(false) }>{t('Питнак')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Shovot') || setMenu(false) }>{t('Шават')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Urganch') || setMenu(false) }>{t('Ургенч')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Xonqa') || setMenu(false) }>{t('Ханка')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Hazorasp') || setMenu(false) }>{t('Хазарасп')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Xiva') || setMenu(false) }>{t('Хива')}</p>
                                                                                                <p className='my-5 cursor-pointer'  onClick={() => setCity('Yangiariq') || setMenu(false) }>{t('Янгиарык')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                            }
                        </div>
                    }

                </div>

                <div className='flex items-center border-l border-gray-300 lg:mr-20  lg:col-span-4 col-span-2'>
                    <AiOutlineSearch className='lg:text-4xl mx-2'/>
                    <input className='lg:text-xl outline-none lg:w-96 lg:px-10' type="text" placeholder={`26840 ${t('объявлений')}`}/>
                </div>

                <div className='flex items-center cursor-pointer lg:ml-20 ml-5 lg:pl-5 lg:border-l border-gray-300 lg:col-span-2 col-span-1'>
                    <p className='lg:text-xl'>{t('Поиск')}</p>
                    <AiOutlineSearch className='lg:text-4xl mx-1'/>
                </div>
            </div>
        </div>
    );
};

export default Search;