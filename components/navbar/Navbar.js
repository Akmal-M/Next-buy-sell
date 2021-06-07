import {AiOutlineHeart} from "react-icons/ai";
import Language from "../Language";
import MyProfile from "./MyProfile";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Profile from "./Profile";
import {useState} from "react";


const Navbar = () => {
    const router = useRouter()
    const {locale} = router;
    const [isUser] = useState(false)

    let {t} = useTranslation()

console.log(locale)
    return (
        <div className='bg-gray-200 flex items-center container mx-auto'>
            <div className='flex justify-between py-5'>
                <Link href='/'>
                    <a href="">
                        <p className='text-3xl text-white mx-40 '>{t("common:LOGO")}</p>
                    </a>
                </Link>
                <div className='flex justify-between lg:ml-96 text-white'>
                    <div className='flex items-center '>
                        <Language/>
                    </div>
                    <p className='text-4xl mx-10 flex items-center'><AiOutlineHeart/></p>
                    {
                        isUser ? <MyProfile/> : <Profile/>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;