import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {useTranslation} from "react-i18next";

const Search = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(false)
    const [district, setDistrict] = useState('all')
    const [city, setCity] = useState('all')

    console.log(menu)
    console.log(district)

    return (
        <div className='h-52 bg-gray-300 flex justify-center items-center  relative text-gray-600 container mx-auto'>
            <div className='flex bg-white p-6 search-width '>
                <div className='flex items-center border-r border-gray-300 mr-20  '>
                    <AiOutlineSearch className='text-4xl mx-2'/>
                    <input className='text-xl outline-none w-96 px-10' type="text" placeholder={t('объявлений')}/>
                </div>


                <div className='flex  items-center' onClick={() => setMenu(true)}>
                    <GoLocation className='text-4xl mx-2'/>

                    {
                        !menu ?
                            <p className='text-xl '>{t('Весь Узбекистан')}</p> :
                            <p className='text-xl invisible'>{t('Весь Узбекистан')}</p>
                    }
                    {
                        menu &&
                        <div>
                            {district === 'all' ?
                                <div
                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-lg'>
                                    <div
                                        className='flex justify-between'>
                                        <p className='m-5 cursor-pointer'
                                           onClick={() => setDistrict('all')}>{t('Весь Узбекистан')}</p>

                                    </div>
                                    <div className='grid grid-cols-4 justify-center border-t border-gray-400 '>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4 '>
                                                <p className='my-5 cursor-pointer whitespace-nowrap' onClick={() => setDistrict('andijan')}>{t('Андижанская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('buhara')}>{t('Бухарская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('jizakh')}>{t('Джизакская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('karakalpak')}>{t('Каракалпакстан')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer whitespace-nowrap' onClick={() => setDistrict('kashkadarya')}>{t('Кашкадарьинская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('navai')}>Навоийская область</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('namangan')}>{t('Наманганская область')}</p>
                                                <p className='my-5 cursor-pointer'
                                                   onClick={() => setDistrict('samarkand')}>{t('Самаркандская область')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer whitespace-nowrap' onClick={() => setDistrict('surkhandarya')}>{t('Сурхандарьинская область')}</p>
                                                <p className='my-5 cursor-pointer whitespace-nowrap' onClick={() => setDistrict('sirdarya')}>{t('Сырдарьинская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('tashkent')}>{t('Ташкентская область')}</p>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('ferghana')}>{t('Ферганская область')}</p>
                                            </div>
                                        </div>
                                        <div className='m-4  flex justify-center'>
                                            <div className='m-4'>
                                                <p className='my-5 cursor-pointer' onClick={() => setDistrict('khorezm')}>{t('Хорезмская обл.')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                district === 'samarkand' ?
                                    <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                        <div className='flex justify-between'>
                                            <p className='m-5 cursor-pointer'
                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                            <p className='m-5'>{t('Искать весь регион')}</p>
                                        </div>
                                        <div className='grid grid-cols-4 border-t border-gray-400'>
                                            <div className='m-4  flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'>{t('Акташ')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Булунгур')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Чилек')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Дарбанд')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Джамбай')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'>{t('Джума')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Гузалкент')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Гюлабад')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Иштыхан')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Каттакурган')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'>{t('Кушрабад')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Лаиш')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Нурабад')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Пайарык')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Пайшанба')}</p>
                                                </div>
                                            </div>
                                            <div className='m-4 flex justify-center'>
                                                <div>
                                                    <p className='my-5 cursor-pointer'>{t('Самарканд')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Тайлак')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Ургут')}</p>
                                                    <p className='my-5 cursor-pointer'>{t('Зиадин')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    district === 'andijan' ?
                                        <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                            <div className='flex justify-between'>
                                                <p className='m-5 cursor-pointer'
                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                <p className='m-5'>{t('Искать весь регион')}</p>
                                            </div>
                                            <div className='grid grid-cols-4 border-t border-gray-400'>
                                                <div className='m-4  flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'>{t('Акалтын')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Алтынкуль')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Андижан')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Асака')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Ахунбабаев')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'>{t('Балыкчи')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Боз')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Булакбаши')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Карасу')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Куйганъяр')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'>{t('Кургантепа')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Мархамат')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Пайтуг')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Пахтаабад')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Шахрихан')}</p>
                                                    </div>
                                                </div>
                                                <div className='m-4 flex justify-center'>
                                                    <div>
                                                        <p className='my-5 cursor-pointer'>{t('Ханабад')}</p>
                                                        <p className='my-5 cursor-pointer'>{t('Ходжаабад')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                        district === 'buhara' ?
                                            <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                <div className='flex justify-between'>
                                                    <p className='m-5 cursor-pointer'
                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                    <p className='m-5'>{t('Искать весь регион')}</p>
                                                </div>
                                                <div className='grid grid-cols-4 border-t border-gray-400'>
                                                    <div className='m-4  flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'>{t('Алат')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Бухара')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Галаасия')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'>{t('Газли')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Гиждуван')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Каган')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'>{t('Каракуль')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Караулбазар')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Ромитан')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 flex justify-center'>
                                                        <div>
                                                            <p className='my-5 cursor-pointer'>{t('Шафиркан')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Вабкент')}</p>
                                                            <p className='my-5 cursor-pointer'>{t('Жондор')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> :
                                            district === 'jizakh' ?
                                                <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                    <div className='flex justify-between'>
                                                        <p className='m-5 cursor-pointer'
                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                        <p className='m-5'>{t('Искать весь регион')}</p>
                                                    </div>
                                                    <div className='grid grid-cols-4 border-t border-gray-400'>
                                                        <div className='m-4  flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'>{t('Айдаркуль')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Баландчакир')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Даштобод')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Дустлик')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'>{t('Джизак')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Гагарин')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Галлаарал')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Голиблар')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'>{t('Марджанбулак')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Пахтакор')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Учтепа')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Усмат')}</p>
                                                            </div>
                                                        </div>
                                                        <div className='m-4 flex justify-center'>
                                                            <div>
                                                                <p className='my-5 cursor-pointer'>{t('Янгикишлак')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Заамин')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Зафарабад')}</p>
                                                                <p className='my-5 cursor-pointer'>{t('Зарбдар')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                district === 'karakalpak' ?
                                                    <div
                                                        className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                        <div className='flex justify-between'>
                                                            <p className='m-5 cursor-pointer'
                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                            <p className='m-5'>{t('Искать весь регион')}</p>
                                                        </div>
                                                        <div className='grid grid-cols-4 border-t border-gray-400'>
                                                            <div className='m-4  flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'>{t('Акмангит')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Беруни')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Бустан')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Чимбай')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'>{t('Канлыкуль')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Караузяк')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Кегейли')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Кунград')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'>{t('Мангит')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Муйнак')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Нукус')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Шуманай')}</p>
                                                                </div>
                                                            </div>
                                                            <div className='m-4 flex justify-center'>
                                                                <div>
                                                                    <p className='my-5 cursor-pointer'>{t('Тахиаташ')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Тахтакупыр')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Турткуль')}</p>
                                                                    <p className='my-5 cursor-pointer'>{t('Ходжейли')}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    district === 'kashkadarya' ?
                                                        <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                            <div className='flex justify-between'>
                                                                <p className='m-5 cursor-pointer'
                                                                   onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                <p className='m-5'>{t('Искать весь регион')}</p>
                                                            </div>
                                                            <div className='grid grid-cols-4 border-t border-gray-400'>
                                                                <div className='m-4  flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'>{t('Бешкент')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Чиракчи')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Дехканабад')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Гузар')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Камаши')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'>{t('Карашина')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Карши')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Касан')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Касби')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Китаб')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'>{t('Мубарек')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Муглан')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Шахрисабз')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Талимарджан')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Яккабаг')}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='m-4 flex justify-center'>
                                                                    <div>
                                                                        <p className='my-5 cursor-pointer'>{t('Янги Миришкор')}</p>
                                                                        <p className='my-5 cursor-pointer'>{t('Янги-Нишан')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        district === 'navai' ?
                                                            <div
                                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                <div className='flex justify-between'>
                                                                    <p className='m-5 cursor-pointer'
                                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                    <p className='m-5'>{t('Искать весь регион')}</p>
                                                                </div>
                                                                <div
                                                                    className='grid grid-cols-4 border-t border-gray-400'>
                                                                    <div className='m-4  flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'>{t('Бешрабат')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Канимех')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Кармана')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'>{t('Кызылтепа')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Навои')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Нурата')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'>{t('Тамдыбулак')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Учкудук')}</p>
                                                                            <p className='my-5 cursor-pointer'>{t('Янгирабат')}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='m-4 flex justify-center'>
                                                                        <div>
                                                                            <p className='my-5 cursor-pointer'>{t('Зарафшан')}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            district === 'namangan' ?
                                                                <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                    <div className='flex justify-between'>
                                                                        <p className='m-5 cursor-pointer'
                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                        <p className='m-5'>{t('Искать весь регион')}</p>
                                                                    </div>
                                                                    <div
                                                                        className='grid grid-cols-4 border-t border-gray-400'>
                                                                        <div className='m-4  flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'>{t('Чартак')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Челак')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Чуст')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'>{t('Джумашуй')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Касансай')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Наманган')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'>{t('Пап')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Ташбулак')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Туракурган')}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className='m-4 flex justify-center'>
                                                                            <div>
                                                                                <p className='my-5 cursor-pointer'>{t('Учкурган')}</p>
                                                                                <p className='my-5 cursor-pointer'>{t('Хаккулабад')}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                district === 'surkhandarya' ?
                                                                    <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                        <div className='flex justify-between'>
                                                                            <p className='m-5 cursor-pointer'
                                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                            <p className='m-5'>{t('Искать весь регион')}</p>
                                                                        </div>
                                                                        <div
                                                                            className='grid grid-cols-4 border-t border-gray-400'>
                                                                            <div
                                                                                className='m-4  flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Ангор')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Байсун')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Бандихон')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Денау')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Джаркурган')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Карлук')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Кизирик')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Кумкурган')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Музрабад')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Сариасия')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Сарык')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Шаргунь')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Шерабад')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Шурчи')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Термез')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Учкызыл')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Узун')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Халкабад')}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                district === 'sirdarya' ?
                                                                    <div className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                        <div className='flex justify-between'>
                                                                            <p className='m-5 cursor-pointer'
                                                                               onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                            <p className='m-5'>{t('Искать весь регион')}</p>
                                                                        </div>
                                                                        <div
                                                                            className='grid grid-cols-4 border-t border-gray-400'>
                                                                            <div className='m-4  flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Бахт')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Баяут')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Cырдарья')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Гулистан')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Навруз')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Сайхун')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Сардоба')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Ширин')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Сырдарья')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Теренозек')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Хаваст')}</p>
                                                                                    <p className='my-5 cursor-pointer'>{t('Янгиер')}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className='m-4 flex justify-center'>
                                                                                <div>
                                                                                    <p className='my-5 cursor-pointer'>{t('Янгиёр')}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :

                                                                        district === 'tashkent' ?
                                                                            <div
                                                                                className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                                <div className='flex justify-between'>
                                                                                    <p className='m-5 cursor-pointer'
                                                                                       onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                    <p className='m-5'>{t('Искать весь регион')}</p>
                                                                                </div>
                                                                                <div
                                                                                    className='grid grid-cols-4 border-t border-gray-400'>
                                                                                    <div
                                                                                        className='m-4  flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'>{t('Аккурган')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Алмалык')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Ангрен')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Ахангаран')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Бекабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Большой Чимган')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Бука')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Чарвак')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Чиназ')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Чирчик')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'>{t('Cукок')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Дурмень')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Дустабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Эшангузар')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Газалкент')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Гульбахор')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Искандар')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Карасу')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Келес')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Кибрай')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'>{t('Коксарай')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Красногорск')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Мирабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Назарбек')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Нурафшан (Тойтепа)')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Паркент')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Пскент')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Салар')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Ташкент')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Ташморе')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className='m-4 flex justify-center'>
                                                                                        <div>
                                                                                            <p className='my-5 cursor-pointer'>{t('Туркестан')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Уртааул')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Ходжикент')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Янгиабад')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Янгибазар')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Янгиюль')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Зафар')}</p>
                                                                                            <p className='my-5 cursor-pointer'>{t('Зангиата')}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            district === 'ferghana' ?
                                                                                <div
                                                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                                    <div
                                                                                        className='flex justify-between'>
                                                                                        <p className='m-5 cursor-pointer'
                                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                        <p className='m-5'>{t('Искать весь регион')}</p>
                                                                                    </div>
                                                                                    <div
                                                                                        className='grid grid-cols-4 border-t border-gray-400'>
                                                                                        <div
                                                                                            className='m-4  flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Алтыарык')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Багдад')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Бешарык')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Дангара')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Фергана')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Коканд')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Кува')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Кувасай')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Лангар')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Маргилан')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Навбахор')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Раван')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Риштан')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Шахимардан')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Ташлак')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Учкуприк')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Вуадиль')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Хамза')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Яйпан')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Янги Маргилан')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Янгикурган')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Язъяван')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                                district === 'khorezm' &&
                                                                                <div
                                                                                    className='absolute search-width left-1/2 transform -translate-x-1/2 top-40 bg-white shadow-lg text-xl'>
                                                                                    <div
                                                                                        className='flex justify-between'>
                                                                                        <p className='m-5 cursor-pointer'
                                                                                           onClick={() => setDistrict('all')}>{t('Выбрать другой регион')}</p>
                                                                                        <p className='m-5'>{t('Искать весь регион')}</p>
                                                                                    </div>
                                                                                    <div
                                                                                        className='grid grid-cols-4 border-t border-gray-400'>
                                                                                        <div
                                                                                            className='m-4  flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Багат')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Чалыш')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Гурлен')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Караул')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Кошкупыр')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Питнак')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Шават')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Ургенч')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Ханка')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className='m-4 flex justify-center'>
                                                                                            <div>
                                                                                                <p className='my-5 cursor-pointer'>{t('Хазарасп')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Хива')}</p>
                                                                                                <p className='my-5 cursor-pointer'>{t('Янгиарык')}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                            }
                        </div>
                    }

                </div>


                <div className='flex items-center cursor-pointer ml-20 pl-5 border-l border-gray-300'>
                    <p className='text-xl'>{t('Поиск')}</p>
                    <AiOutlineSearch className='text-4xl mx-1'/>
                </div>
            </div>
        </div>
    );
};

export default Search;