import React from "react";

const  CategoryCard = ({img, name, menu}) => {

    return (
           <div className={menu ? 'cursor-pointer bg-white rounded-md lg:w-36 lg:h-32 md:h-24 h-20 smooth-hover ' :
               'cursor-pointer bg-white rounded-md lg:w-36 lg:h-32 lg:mb-10 smooth-shadow '} >
               <img src={img}
                    alt="" className='w-full lg:h-24 h-10 md:h-24 rounded-lg w-auto'/>
               <p className='lg:text-md  text-xs md:text-sm tracking-tighter text-gray-500 font-semibold text-center '>{name}</p>
           </div>
    );
};

export default CategoryCard;
