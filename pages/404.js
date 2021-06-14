import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center relative'
             style={{backgroundImage: `url('https://res.cloudinary.com/bulutvoy/image/upload/v1623676810/buyandsell/404_jcm5ut.jpg')`}}>
            <div className='flex justify-center items-center absolute bottom-36'>
                <Link href='/' className='text-custom-green-400'>
                    <a className='  bg-blue-700 text-white rounded-full px-10 pt-4 pb-3 '>
                        Go to Homepage
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;