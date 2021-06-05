import React from 'react';
import i18next from 'i18next';

const Language = () => {
    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }
    return (
        <div className='flex text-md'>
            <p className='lg:px-3 px-2 cursor-pointer' onClick={()=>handleClick('uz')}><img className='lg:max-h-6 max-h-6' src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/uz_nykcg6.png" alt="uz"/></p>
            <p className='lg:px-3 px-2 cursor-pointer'  onClick={()=>handleClick('ru')}><img className='lg:max-h-6 max-h-6' src="https://res.cloudinary.com/bulutvoy/image/upload/v1622300753/innoveder/main/ru_mkggzl.png" alt="ru"/></p>
        </div>
    );
};

export default Language;