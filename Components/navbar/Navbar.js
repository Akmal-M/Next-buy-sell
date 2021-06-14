import {AiOutlineHeart} from "react-icons/ai";
import MyProfile from "./MyProfile";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Profile from "./Profile";
import {useContext} from "react";
import DropdownLanguage from "../DropdownLanguage";
import {DataContext} from "../../store/GlobalState";


const Navbar = () => {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const {auth, cart} = state


    let {t} = useTranslation()


    return (
        <div>
            <div
                className='bg-purple-50 text-gray-700 flex  items-center container mx-auto justify-between shadow-smooth'>
                <div className='flex justify-between lg:py-3 py-3'>
                    <Link href='/'>
                        <a href="">
                            <p className='lg:text-3xl  lg:mx-40 '>{auth.user && auth.user.role === 'admin' ? `${t("common:Admin")}` : `${t("common:LOGO")}`}</p>
                        </a>
                    </Link>
                    <div className='flex justify-between lg:ml-96 '>
                        <div className='flex items-center '>
                            <DropdownLanguage/>
                        </div>

                        <div className={auth.user && auth.user.role === 'admin' ? 'hidden' : 'flex'}>
                            <Link href='/cart'>
                                <a>
                                    <p className='lg:text-4xl text-3xl mr-2 lg:mx-10 flex items-center'>
                                        <AiOutlineHeart/></p>
                                </a>
                            </Link>
                        </div>

                        {
                            Object.keys(auth).length !== 0 ? <MyProfile/> : <Profile/>
                        }

                        <div
                            className={auth.user && auth.user.role === 'admin' ? 'hidden' : 'mr-2 flex justify-center items-center'}>
                            {auth.user && auth.user.role === 'user' ?
                                <Link href='/createproduct' className=''>
                                    <a href="#"
                                       className='lg:py-1  text-center lg:px-4 px-1 lg:text-lg ml-2 text-small   flex justify-center items-center bg-green-200 text-white hover:bg-gray-300 rounded-md hover:text-white lg:ml-20'>
                                        {t('Подать объявление')}
                                    </a>
                                </Link>
                                :
                                <Link href='/login' className=''>
                                    <a href="#"
                                       className='lg:py-1  text-center lg:px-4 px-1 lg:text-lg ml-2 text-small   flex justify-center items-center bg-green-200 text-white hover:bg-gray-300 rounded-md hover:text-white lg:ml-20'>
                                        {t('Подать объявление')}
                                    </a>
                                </Link>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;