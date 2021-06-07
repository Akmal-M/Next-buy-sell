import React, {useState} from 'react';
import Link from "next/link";
import {MdPersonOutline} from "react-icons/md";
import {BiDownArrow} from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";


const MyProfile = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(false)

    return (
        <div className='flex items-center relative'>
            <MdPersonOutline className='text-3xl mx-2'/>
            {t('Мой профиль')}
            <p onMouseEnter={() => setMenu(!menu)} className='mx-2 cursor-pointer'><BiDownArrow/></p>

            <Link href='/' className=''>
                <a href="#"
                   className='py-3 px-4 text-lg bg-white hover:bg-gray-600 rounded-lg text-black hover:text-white ml-20'>
                    {t('Подать объявление')}
                </a>
            </Link>

            {menu &&
            <div onMouseLeave={() => setMenu(!menu)}
                 className='absolute top-14 bg-white text-gray-800 h-auto w-64 py-5 shadow-lg rounded-lg z-50'>
                <div className='justify-center items-center flex text-md p-3'>
                    <div>
                        <div className='flex'>
                            <div className='w-12 rounded-full mr-3'>
                                <img src="https://res.cloudinary.com/bulutvoy/image/upload/v1622881055/sold%20commerce/people-default_wru4vb.svg" alt=""/>
                            </div>
                            <div>
                                <p>phone number</p>
                                <p>id number</p>
                            </div>
                        </div>

                        <div className='pt-7 text-gray-600'>
                            <p className='text-lg text-gray-400'>{t('Мой профиль:')}</p>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Oбъявления')}
                                    </a>
                                </Link>
                            </div>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Сообшения')}
                                    </a>
                                </Link>
                            </div>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Платежи INV')}
                                    </a>
                                </Link>
                            </div>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Настройки')}
                                    </a>
                                </Link>
                            </div>

                            <p className='text-lg text-gray-400 pt-5'>{t('Избранные:')}</p>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Oбъявления')}
                                    </a>
                                </Link>
                            </div>
                            <div className='my-5'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Поиски')}
                                    </a>
                                </Link>
                            </div>
                            <div className='mt-10 pt-5 border-t border-gray-300'>
                                <Link href='/' className=''>
                                    <a href="#" className='hover:text-gray-400 '>
                                        {t('Выйти')}
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyProfile;