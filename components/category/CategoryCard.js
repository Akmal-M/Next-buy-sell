import React from "react";

const  CategoryCard = ({img, name, menu}) => {

    return (
           <div className={menu ? 'cursor-pointer bg-white rounded-md lg:w-36 lg:h-32 h-20 smooth-hover border-2 border-gray-500' :
               'cursor-pointer bg-white rounded-md lg:w-36 lg:h-32 lg:mb-10 smooth-shadow border border-gray-500'} >
               <img src={img}
                    alt="" className='w-full lg:h-24 h-10 rounded-lg w-auto'/>
               <p className='lg:text-md  tracking-tighter text-gray-500 font-semibold text-center '>{name}</p>
           </div>
    );
};

export default CategoryCard;
