import {IoMdHeartEmpty} from "react-icons/io";

const CardOne = ({product}) => {
    return (
        <div className=' lg:px-0 px-5 '>
            <div className= 'grid md:grid-cols-3  gap-5 lg:max-w-7xl  container mx-auto  lg:pb-52 '>
                <div key={product._id}
                     className='lg:p-3 p-1  smooth-shadow hover:smooth-hover lg:max-h-96 cursor-pointer rounded-lg bg-white'>
                    <div>
                        <img src={product.images[0].url} alt="" className='w-full h-60 object-cover'/>
                    </div>
                    <div className='px-4 pt-2'>
                        <p className='font-bold text-sm lg:py-3 py-1'>{product.title}</p>
                        <div className='flex justify-between text-xs mt-4'>
                            <p>{product.address}</p>
                            <p>{product.time}</p>
                        </div>
                        <div className='flex justify-between lg:pt-3 py-1 lg:px-3 px-1 mt-1'>
                            <p className='lg:text-xl text-md font-bold'>${product.price}</p>
                            <div>
                                <IoMdHeartEmpty size={30} className='lg:text-4xl text-xl pb-2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOne;