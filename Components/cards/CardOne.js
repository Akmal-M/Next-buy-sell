import {IoMdHeartEmpty} from "react-icons/io";

const CardInfo = ({img, name, address, time, price }) => {
    return (
        <div className='lg:p-3 p-1 smooth-shadow hover:smooth-hover lg:max-h-96 cursor-pointer rounded-lg bg-white'>
            <div>
                <img src={img} alt="" className='w-full h-48 object-cover'/>
            </div>
            <div>
                <p className='font-bold text-md lg:py-3 py-1'>{name}</p>
               <div className='flex justify-between text-xs'>
                   <p>{address}</p>
                   <p>{time}</p>
               </div>
                <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                    <p className='lg:text-xl text-md font-bold'>${price}</p>
                    <div >
                        <IoMdHeartEmpty className='lg:text-3xl text-xl'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;