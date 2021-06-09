import Head from 'next/head'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";

const Rewritepassword = () => {
    const {t} = useTranslation();
    const initialState = { password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const {  password, cf_password } = userData

    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const router = useRouter()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = valid(name, password, cf_password)
        if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

        dispatch({ type: 'NOTIFY', payload: {loading: true} })

        const res = await postData('auth/register', userData)

        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    }

    useEffect(() => {
        if(Object.keys(auth).length !== 0) router.push("/")
    }, [auth])

    return (
        <div>
            <Head>
                <title>Rewrite Password page</title>
            </Head>
            <div>


                <div className="lg:w-1/2 xl:max-w-screen-sm">

                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-yellow-300 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                            {t('Регистрация')}
                        </h2>
                        <div className="mt-12">
                            <form onSubmit={handleSubmit}>

                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Ваш пароль')}
                                        </div>
                                        <div>
                                            <div>
                                                <a className="text-xs font-display font-semibold text-yellow-400 hover:text-yellow-400 cursor-pointer">
                                                    {t('Пароль должен содержать не менее 6 символов')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="password" placeholder={t('Придумайте надежный пароль')}
                                        name="password" value={password} onChange={handleChangeInput}/>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Подтвердить Пароль')}
                                        </div>
                                        <div>
                                            <div>
                                                <a className="text-xs font-display font-semibold text-yellow-400 hover:text-yellow-400 cursor-pointer">
                                                    {t('Введите пароль повторно')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="password" placeholder={t('Введите пароль повторно')}
                                        name="cf_password" value={cf_password} onChange={handleChangeInput} />

                                </div>
                                <div className="mt-10">
                                    <button
                                        className="bg-yellow-200  text-white p-4 w-full rounded-md tracking-wide  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-300 shadow-lg">
                                        {t('Подтвердить')}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Rewritepassword