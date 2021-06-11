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
    const { auth, cart } = state


    let {t} = useTranslation()



    return (
        <div className='bg-gray-500 flex  items-center container mx-auto'>
            <div className='flex justify-between lg:py-5 py-3'>
                <Link href='/'>
                    <a href="">
                        <p className='lg:text-3xl text-white lg:mx-40 '>{t("common:LOGO")}</p>
                    </a>
                </Link>
                <div className='flex justify-between lg:ml-96 text-white'>
                    <div className='flex items-center '>
                        <DropdownLanguage/>
                    </div>
                    <Link href='/cart'>
                        <a>
                            <p className='lg:text-4xl text-3xl mx-2 lg:mx-10 flex items-center'><AiOutlineHeart/></p>
                        </a>
                    </Link>
                    {
                        Object.keys(auth).length !== 0  ? <MyProfile/> : <Profile/>
                    }

                   <div className='mr-2'>
                       <Link href='/' className=''>
                           <a href="#"
                              className='lg:py-3  text-center lg:px-4 px-2 lg:text-lg text-xs flex justify-center items-center bg-white hover:bg-gray-600 rounded-lg text-black hover:text-white lg:ml-20'>
                               {t('Подать объявление')}
                           </a>
                       </Link>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;