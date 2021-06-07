import React from 'react';
import {useRouter} from "next/router";
import {uz, ru} from '../translations'


const Language = () => {
    const router = useRouter();


const setRu = () => {
    router.push("/", "/", {locale: "ru"})
}

    const setUZ = () => {
        router.push("/", "/", {locale: "uz"})
    }

    return (
        <div className='flex text-md text-white'>
            <p className='lg:px-3 px-2 cursor-pointer' onClick={setUZ}><img
                className='lg:max-h-6 max-h-6'
                src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/uz_nykcg6.png"
                alt="uz"/></p>
            <p className='lg:px-3 px-2 cursor-pointer' onClick={setRu}><img className='lg:max-h-6 max-h-6'
                                                                                  src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/ru_mkggzl.png"
                                                                                  alt="ru"/></p>
        </div>
    );
};

export default Language;