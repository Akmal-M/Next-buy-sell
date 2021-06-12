import Head from 'next/head'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {useContext, useEffect, useState} from "react";
import Cookie from 'js-cookie'
import {useRouter} from "next/router";
import {DataContext} from "../store/GlobalState";
import {postData} from "../utils/fetchingData";
import {BiHide, BiShow} from "react-icons/bi";

const Login = () => {
    const {t} = useTranslation();
    const initialState = {phone: '', password: ''}
    const [userData, setUserData] = useState(initialState)
    const [hide, setHide] = useState(false)
    const {phone, password} = userData

    const {state, dispatch} = useContext(DataContext)
    const {auth, notify} = state

    const router = useRouter()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
        dispatch({type: 'NOTIFY', payload: {}})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({type: 'NOTIFY', payload: {loading: true}})
        const res = await postData('auth/login', userData)

        if (res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        dispatch({type: 'NOTIFY', payload: {success: res.msg}})

        dispatch({
            type: 'AUTH', payload: {
                token: res.access_token,
                user: res.user
            }
        })

        Cookie.set('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem('firstLogin', true)
    }

    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push("/")
    }, [auth])

    return (
        <div>
            <Head>
                <title>Sign in</title>
            </Head>
            <div>


                <div className="lg:w-1/2 xl:max-w-screen-sm">

                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-yellow-300 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                            {t('Вход')}
                        </h2>
                        <div className="mt-12">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide flex justify-between">
                                        {t('Номер телефона')}
                                        <div className='xl:text-red-600 flex justify-end'>
                                            {notify.error}
                                        </div>
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400"
                                        type="number"
                                        placeholder="Введите ваш номер телефона"
                                        name="phone"
                                        value={phone}
                                        onChange={handleChangeInput}/>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Ваш пароль')}
                                        </div>
                                        <div>
                                            <Link href='/forgotpassword'>
                                                <a className="text-xs font-display font-semibold text-yellow-400 hover:text-yellow-500 cursor-pointer">
                                                    {t('Забыли пароль?')}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                   <div className='flex justify-center items-center'>
                                       <input
                                           className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400"
                                           type={`${hide ? "text"  : "password"}`}
                                           placeholder={t('Введите ваш пароль')}
                                           name="password"
                                           value={password} onChange={handleChangeInput}/>
                                       {hide ? <div onClick={() => setHide(!hide)} className='text-yellow-300'><BiShow size={30}/></div> :
                                           <div onClick={() => setHide(!hide)} className='text-yellow-300'><BiHide size={30}/></div>}
                                   </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="bg-yellow-200  text-white p-4 w-full rounded-md tracking-wide  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-300 shadow-lg">
                                        {t('Вход')}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                <p>{t('Нет аккаунта еще?')}</p>
                                <Link href='/register'>
                                    <a className="cursor-pointer text-yellow-300 hover:text-indigo-400">{t('Регистрация')}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Login

