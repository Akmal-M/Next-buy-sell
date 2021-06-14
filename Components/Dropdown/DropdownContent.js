import React from 'react';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const DropdownContent = ({item}) => {
    const {t, lang} = useTranslation();

    return (
        <div key={item.link} className=' '>
            <div  className='   mb-5'>
                <div className='lg:mx-4   '>
                    <div className='lg:mx-4 grid grid-cols-4'>
                        <Link href={item.link}>
                            <a>
                                <p className='my-4 cursor-pointer flex lg:text-xl text-sm whitespace-nowrap hover:bg-gray-400 hover:text-white rounded-md px-4  hover:bg-gray-400 hover:text-white rounded-md px-4'>
                                    {t(`${item.name}`)}
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownContent;