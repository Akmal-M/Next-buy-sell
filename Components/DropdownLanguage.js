import React, {useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";


const DropdownLanguage = () => {
    const {lang} = useTranslation();
    const router = useRouter();


    const [Language, setLanguage] = useState(false)

    const setRu = () => {
        router.push("/", "/", {locale: "ru"})
    }

    const setUZ = () => {
        router.push("/", "/", {locale: "uz"})
    }


    return (
        <div className='dropdown relative inline-block cursor-pointer'>
            <div className='text-md text-gray-400' onClick={() => setLanguage(!Language)}>
                <div className='flex  justify-center lg:w-20 w-16 '>
                    <div>
                        {lang === 'uz' ? <span>UZ</span> : lang === 'ru' && <span>RU</span>}
                    </div>
                </div>
            </div>
            {
                Language &&
                <div className='dropdown-content hidden absolute bg-white shadow px-5 py-4 z-50 rounded-md'>

                    <p className=' cursor-pointer pb-1' onClick={setUZ}>
                        <img className='max-h-10'
                             src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/uz_nykcg6.png"
                             alt="uz" onClick={() => setLanguage(!Language)}/>
                    </p>
                    <p className=' cursor-pointer lg:pt-1 pt-3' onClick={setRu}>
                        <img className='max-h-10'
                             src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/ru_mkggzl.png"
                             alt="ru" onClick={() => setLanguage(!Language)}/>
                    </p>
                </div>
            }
        </div>

    );
};

export default DropdownLanguage;

