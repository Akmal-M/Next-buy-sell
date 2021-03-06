import React, {useContext, useState} from 'react';
import Link from "next/link";
import {BiDownArrow} from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";
import {DataContext} from "../../store/GlobalState";


const Profile = () => {
    const {t} = useTranslation();
    const [isUser] = useState(false)
    const [menu, setMenu] = useState(false)
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state


    return (
        <div className='flex items-center relative ' >

             <div className='dropdown inline-block relative' onClick={()=> setMenu(!menu)}>
                 <div className=' flex items-center  cursor-pointer ' >
                     <img src="https://res.cloudinary.com/bulutvoy/image/upload/v1622881055/sold%20commerce/people-default_wru4vb.svg" alt=""
                     className='flex justify-center items-center mb-2 w-6 h-6 mx-1'/>
                     <div className='lg:text-lg'>{ isUser ?  `${t('Мой профиль')}` : `${t('Гость')}` }</div>
                     <p className='mx-2'><BiDownArrow/></p>
                 </div>

                 { menu &&
                 <div className='dropdown-content absolute hidden bg-white text-gray-800 h-auto lg:w-40 lg:py-5 shadow-lg rounded-lg z-50'>
                     <div className='justify-center items-center flex text-md p-3'>
                         <div>
                             <div className=' text-gray-600'>
                                 <p className='lg:text-lg text-gray-400'>{t('Гость:')}</p>
                                 <div className='my-5'>
                                     <Link href='/login' className=''>
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


        </div>
    );
};

export default Profile;