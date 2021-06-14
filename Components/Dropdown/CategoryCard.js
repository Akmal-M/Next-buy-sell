import React from "react";

const  CategoryCard = ({img, name,}) => {

    return (
           <div className='mx-1 cursor-pointer bg-white lg:w-28 smooth-hover' >
               <img src={img}
                    alt="" className='w-full lg:h-24 h-10 md:h-24 rounded-t-lg w-auto'/>
               <p className='lg:text-md overflow-hidden  text-smaller md:text-sm  text-gray-500 font-semibold text-center '>{name}</p>
           </div>
    );
};

export default CategoryCard;
