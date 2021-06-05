import {AiOutlineHeart} from "react-icons/ai";
import Language from "../Language";
import MyProfile from "./MyProfile";

const Navbar = () => {

    return (
        <div className='bg-gray-900 flex items-center'>
            <div className='flex justify-between py-5'>
                <p className='text-3xl text-white mx-40'>LOGO</p>
                <div className='flex justify-between lg:ml-96 text-white'>
                    <div className='flex items-center '>
                        <Language/>
                    </div>
                    <p className='text-4xl mx-10 flex items-center'><AiOutlineHeart/></p>
                    <MyProfile/>

                </div>
            </div>
        </div>
    );
};

export default Navbar;