import React, {useContext, useState} from 'react';
import Link from "next/link";
import {BiDownArrow} from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";
import {DataContext} from "../../store/GlobalState";
import Cookie from 'js-cookie'
import {useRouter} from "next/router";


const MyProfile = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(true)
    const router = useRouter();
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state



    console.log(auth.role)
    console.log(auth)

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }

    const userLink = () => {
        return(
            <div className='lg:pt-7 text-gray-600'>
                <p className='lg:text-lg text-gray-400 lg:flex hidden'>{t('Мой профиль:')}</p>
                <div className='lg:my-4 my-3'>
                    <Link href='/myads' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Мои объявления')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/messages' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Сообшения')}
                        </a>
                    </Link>
                </div>

                <div className='lg:my-4 my-3'>
                    <Link href='/settings' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Настройки')}
                        </a>
                    </Link>
                </div>

                <p className='lg:text-lg text-gray-400 lg:pt-3 pt-2'>{t('Избранные:')}</p>
                <div className='lg:my-4 my-3'>
                    <Link href='/cart' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Oбъявления')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/mysearch' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Поиски')}
                        </a>
                    </Link>
                </div>
                <div className='lg:mt-10 mt-5 pt-3 lg:pt-5 border-t border-gray-300'>
                    <Link href='/' className=''>
                        <a href="#" className='hover:text-gray-400 '  onClick={handleLogout}>
                            {t('Выйти')}
                        </a>
                    </Link>
                </div>
            </div>

        )
    }

    const adminLink = () => {
        return(
            <div className='lg:pt-7 text-gray-600'>
                <p className='lg:text-lg text-gray-400 lg:flex hidden'>{t('Мой профиль:')}</p>
                <div className='lg:my-4 my-3'>
                    <Link href='/all-ads' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Все объявления')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/users' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Пользователи')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/categories' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Категории')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/minicategories' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Подкатегории')}
                        </a>
                    </Link>
                </div>

                <div className='lg:my-4 my-3'>
                    <Link href='/settings' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Настройки')}
                        </a>
                    </Link>
                </div>

                <p className='lg:text-lg text-gray-400 lg:pt-3 pt-2'>{t('Избранные:')}</p>
                <div className='lg:my-4 my-3'>
                    <Link href='/cart' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Oбъявления')}
                        </a>
                    </Link>
                </div>
                <div className='lg:my-4 my-3'>
                    <Link href='/mysearch' className=''>
                        <a href="#" className='hover:text-gray-400'>
                            {t('Поиски')}
                        </a>
                    </Link>
                </div>
                <div className='lg:mt-10 mt-5 pt-3 lg:pt-5 border-t border-gray-300'>
                    <Link href='/' className=''>
                        <a href="#" className='hover:text-gray-400 '  onClick={handleLogout}>
                            {t('Выйти')}
                        </a>
                    </Link>
                </div>
            </div>

        )
    }


    return (
        <div className='flex items-center cursor-pointer '>
           <div className='inline-block relative dropdown' onClick={() => setMenu(!menu)}>
               <div className='flex mx-5 items-center ' >
                   {
                       auth.user.avatar ?   <img src={auth.user.avatar} alt="" className='rounded-full lg:w-8 lg:h-8 w-6 h-6 lg:mr-2 mr-1'/>
                           :  <img src="https://res.cloudinary.com/bulutvoy/image/upload/v1622881055/sold%20commerce/people-default_wru4vb.svg" alt=""
                                   className='rounded-full lg:w-8 lg:h-8 w-4 h-4 lg:mr-2 mr-1'/>
                   }


                   { auth.user.name ?  <p className='lg:text-base text-xs text-gray-500 flex'>{auth.user.name}</p>
                       :
                       <p className='lg:text-lg text-gray-400 lg:flex hidden'>{t('Мой профиль:')}</p>

                   }
                   <p  className='lg:mx-2 lg:flex '><BiDownArrow/></p>
               </div>

               {menu &&
               <div onClick={() => setMenu(!menu)}
                    className=' dropdown-content absolute hidden bg-white text-gray-800 h-auto lg:w-64 w-40 lg:mt-0 mt-2  lg:py-5 py- shadow-lg rounded-lg z-50'>
                   <div className='justify-center items-center flex text-md p-3'>
                       <div>
                           <div className='flex justify-center items-center'>
                               <div className='w-12 rounded-full mr-3'>
                                   {
                                       auth.user.avatar ?   <img src={auth.user.avatar} alt="" className='rounded-full w-10 h-10 lg:w-20 lg:h-12 bg-contain'/>
                                       :  <img src="https://res.cloudinary.com/bulutvoy/image/upload/v1622881055/sold%20commerce/people-default_wru4vb.svg" alt=""/>
                                   }
                               </div>
                              <Link href='/profile'>
                                  <a className='text-xs lg:text-lg'>
                                      <p>{auth.user.name}</p>
                                      <p>{auth.user.phone}</p>
                                      <p>{auth.user.id}</p>
                                  </a>
                              </Link>
                           </div>
                           {
                               auth.user && auth.user.role === 'admin' ? adminLink() : userLink()
                           }

                       </div>
                   </div>
               </div>
               }

           </div>


        </div>
    );
};

export default MyProfile;