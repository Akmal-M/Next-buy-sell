import {IoMdHeartEmpty} from "react-icons/io";

const CardInfo = ({img, name, address, time, price, description }) => {
    return (
       <div className='flex justify-center items-center smooth-shadow hover:smooth-hover lg:max-h-96 lg:h-72 h-34 cursor-pointer rounded-lg bg-white'>
           <div className='grid lg:grid-cols-4 grid-cols-6 lg:p-3 py-1 mx-1'>
               <div className='col-span-2 lg:col-span-1 flex justify-center '>
                   <img src={img} alt="" className='w-full lg:h-64 md:h-36 info-img-h object-cover rounded-md'/>
               </div>
               <div className='col-span-4 lg:col-span-3 lg:px-5 px-2'>
                   <p className='font-bold lg:text-md lg:text-lg text-sm lg:py-1 text-line-cut'>{name}</p>

                   <div className='h-14 lg:h-auto overflow-hidden lg:overflow-auto'>
                       <p className='lg:text-sm text-mid-small lg:py-2  sm:text-cut '>{description}</p>
                   </div>
                   <div className='flex justify-between lg:text-sm lg:pt-0 pt-1 text-small'>
                       <p>{address}</p>
                       <p>{time}</p>
                   </div>
                   <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                       <p className='lg:text-xl text-sm font-bold'>${price}</p>
                       <div >
                           <IoMdHeartEmpty className='lg:text-3xl text-xl'/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default CardInfo;