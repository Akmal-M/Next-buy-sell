import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {useTranslation} from "react-i18next";

const Search = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState('all')

    return (
        <div className='h-52 bg-gray-300 flex justify-center items-center relative text-gray-600 container mx-auto'>
            <div className='flex bg-white p-6'>
                <div className='flex items-center border-r border-gray-300 mr-20'>
                    <AiOutlineSearch className='text-4xl mx-2'/>
                    <input className='text-xl outline-none w-96 px-10' type="text" placeholder={t('объявлений')}/>
                </div>


                <div className='flex  items-center' onClick={() => setMenu(!menu)}>
                    <GoLocation className='text-4xl mx-2'/>

                    {
                        !menu ?
                            <p className='text-xl '>{t('Весь Узбекистан')}</p> :
                            <p className='text-xl invisible'>{t('Весь Узбекистан')}</p>
                    }
                    {
                        menu &&
                        <div className='flex grid-cols-4 absolute top-40 inset-0 bg-white shadow-lg text-xl'>
                            <div className='m-4 '>
                                <p className='my-5 cursor-pointer'>Андижанская область</p>
                                <p className='my-5 cursor-pointer'>Бухарская область</p>
                                <p className='my-5 cursor-pointer'>Джизакская область</p>
                                <p className='my-5 cursor-pointer'>Каракалпакстан</p>
                            </div>
                            <div className='m-4'>
                                <p className='my-5 cursor-pointer'>Кашкадарьинская область</p>
                                <p className='my-5 cursor-pointer'>Навоийская область</p>
                                <p className='my-5 cursor-pointer'>Наманганская область</p>
                                <p className='my-5 cursor-pointer'>Самаркандская область</p>
                            </div>
                            <div className='m-4'>
                                <p className='my-5 cursor-pointer'>Сурхандарьинская область</p>
                                <p className='my-5 cursor-pointer'>Сырдарьинская область</p>
                                <p className='my-5 cursor-pointer'>Ташкентская область</p>
                                <p className='my-5 cursor-pointer'>Ферганская область</p>
                            </div>
                            <div className='m-4'>
                                <p className='my-5 cursor-pointer'>Хорезмская обл.</p>
                            </div>
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