import Head from 'next/head'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ForgotPassword = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>Forgot password</title>
            </Head>
            <div>


                <div className="lg:w-1/2 xl:max-w-screen-sm">

                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-yellow-300 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                            {t('Восстановление пароля')}
                        </h2>
                        <div className="mt-12">
                            <form>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">{t('Номер телефона который зарегистрирован ваш аккаунт.')}</div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-400"
                                        type="" placeholder="Введите номер телефона"/>
                                </div>

                                <div className="mt-10">
                                    <button
                                        className="bg-yellow-200  text-white p-4 w-full rounded-md tracking-wide  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-300 shadow-lg">
                                        {t('Отправить код')}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                <p>{t('Мы отправим код на этот номер для восстановления вашего аккаунта.')}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ForgotPassword