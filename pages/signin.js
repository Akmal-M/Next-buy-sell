import Head from 'next/head'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Signin = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>Sign in</title>
            </Head>
            <div>


                <div className="lg:w-1/2 xl:max-w-screen-sm">

                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                            {t('Вход')}
                        </h2>
                        <div className="mt-12">
                            <form>
                                <div>
                                    <div
                                        className="text-sm font-bold text-gray-700 tracking-wide">{t('Номер телефона')}</div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="" placeholder="Введите ваш номер телефона"/>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            {t('Ваш пароль')}
                                        </div>
                                        <div>
                                            <Link href='./'>
                                                <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800cursor-pointer">
                                                    {t('Забыли пароль?')}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="" placeholder={t('Введите ваш пароль')}/>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="bg-indigo-300  text-white p-4 w-full rounded-md tracking-wide  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-400 shadow-lg">
                                        {t('Вход')}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Don't have an account ?
                                <Link href='/register'>
                                    <a className="cursor-pointer text-indigo-300 hover:text-indigo-400">{t('Регистрация')}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Signin