import Head from 'next/head'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchingData'
import {BiHide, BiShow} from "react-icons/bi";


const Register = () => {
    const {t} = useTranslation();
    const initialState = { name: '',phone:'', password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const [hide, setHide] = useState(false)
    const [secondHide, setSecondHide] = useState(false)
    const { name, phone, password, cf_password } = userData

    const {state, dispatch} = useContext(DataContext)
    const { auth, notify } = state
    console.log(state)

    const router = useRouter()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = valid(name,phone, password, cf_password)
        if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

        dispatch({ type: 'NOTIFY', payload: {loading: true} })

        const res = await postData('auth/register', userData)

        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    }

    // useEffect(() => {
    //     if(Object.keys(auth).length !== 0) router.push("/")
    // }, [auth])
    useEffect(() => {
        if (notify.success) router.push("/login")
    }, [notify])


    return (
        <div>
            <Head>
                <title>Register page</title>
            </Head>
            <div>


                <div className="lg:w-1/2 xl:max-w-screen-sm">

                    <div className=" mt-3 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-10 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl  text-yellow-300 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                            {t('Регистрация')}
                        </h2>
                        <div className="mt-5 lg:mt-10">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">{t('Ваше имя')}</div>
                                    <input
                                        className="w-full lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400 px-3 px-3"
                                        type="text" placeholder="Ваше имя"
                                        name="name" value={name} onChange={handleChangeInput}/>

                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">{t('Номер телефона')}</div>
                                    <input
                                        className="w-full lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400 px-3"
                                        type="number" placeholder="Введите ваш номер телефона"
                                        name="phone" value={phone} onChange={handleChangeInput}/>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Ваш пароль')}
                                        </div>

                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <input
                                            className="w-full lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400 px-3"
                                            type={`${hide ? "text"  : "password"}`}
                                            placeholder={t('Придумайте надежный пароль')}
                                            name="password"
                                            value={password} onChange={handleChangeInput}/>
                                        {hide ? <div onClick={() => setHide(!hide)} className='text-yellow-300 cursor-pointer'><BiShow size={25}/></div> :
                                            <div onClick={() => setHide(!hide)} className='text-yellow-300 cursor-pointer'><BiHide size={25}/></div>}
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Подтвердить Пароль')}
                                        </div>
                                        <div className='text-right'>
                                                <a className="text-xs font-display font-semibold text-yellow-400 hover:text-yellow-400 cursor-pointer">
                                                    {t('Введите пароль повторно')}
                                                </a>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <input
                                            className="w-full lg:text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400 px-3"
                                            type={`${secondHide ? "text"  : "password"}`}
                                            placeholder={t('Придумайте надежный пароль')}
                                            name="cf_password"
                                            value={cf_password} onChange={handleChangeInput}/>
                                        {secondHide ? <div onClick={() => setSecondHide(!secondHide)} className='text-yellow-300 cursor-pointer'><BiShow size={25}/></div> :
                                            <div onClick={() => setSecondHide(!secondHide)} className='text-yellow-300 cursor-pointer'><BiHide size={25}/></div>}
                                    </div>
                                </div>
                                <div className='text-center pt-5'>
                                    <a className="text-xs font-display font-semibold  text-red-500 cursor-pointer">
                                        <p >{notify.error} {notify.success}</p>
                                    </a>
                                </div>
                                <div className="lg:mt-10 mt-5">
                                    <button
                                        className="bg-yellow-200  text-white p-4 w-full rounded-md tracking-wide  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-300 shadow-lg">
                                        {t('Регистрация')}
                                    </button>
                                </div>
                            </form>
                            <div className="lg:mt-12 mt-5 text-sm font-display font-semibold text-gray-700 text-center">
                                <p>{t('Уже зарегистрирован?')}</p>
                                <Link href='/login'>
                                    <a className="cursor-pointer text-yellow-300 hover:text-indigo-400">{t('вход')}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Register