import * as url from "url";

const Category = ({img, name}) => {

    return (
        <div className='cursor-pointer '>
            <div className='relative'>
                <div className='flex justify-center '>
                    <img src="https://res.cloudinary.com/bulutvoy/image/upload/v1623018002/sold%20commerce/round_zlaont.png" alt="" className='max-h-28 -top-2 absolute z-10'/>
                </div>
                <div className='flex justify-center bg-cover bg-center'>
                    <img src={img} alt={name} className='max-h-24 z-20'/>
                </div>
            </div>
           <div>
               <p className='font-bold lg:text-lg text-gray-800 text-center lg:mt-3'>{name}</p>
           </div>
        </div>
    );
};

export default Category;