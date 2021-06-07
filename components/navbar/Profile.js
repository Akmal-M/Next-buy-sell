import React, {useState} from 'react';
import Link from "next/link";
import {MdPersonOutline} from "react-icons/md";
import {BiDownArrow} from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";


const Profile = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(false)
    const [isUser] = useState(false)

    return (
        <div className='flex items-center relative'>
            <Link  href='/signin'>
                <a className='flex items-center relative'>
                    <MdPersonOutline className='text-3xl mx-2' />
                    { isUser ?  `${t('Мой профиль')}` : `${t('Гость')}` }
                    <p onMouseEnter={() => setMenu(!menu)} className='mx-2 cursor-pointer'><BiDownArrow/></p>
                </a>
            </Link>

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


                        <div className='pt-7 text-gray-600'>
                            <p className='text-lg text-gray-400'>{t('Гость:')}</p>
                            <div className='my-5'>
                                <Link href='/signin' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Вход')}
                                    </a>
                                </Link>
                            </div>
                            <div className='my-5'>
                                <Link href='/register' className=''>
                                    <a href="#" className='hover:text-gray-400'>
                                        {t('Регистрация')}
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

export default Profile;