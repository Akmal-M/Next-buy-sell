import {IoMdHeartEmpty} from "react-icons/io";
import productsData from "../../productsData";

const CardOne = ({img, name, address, time, price}) => {
    return (
        <div>
            {productsData.top.map(item => (
                <div key={item.name}
                    className='lg:p-3 p-1  smooth-shadow hover:smooth-hover lg:max-h-96 cursor-pointer rounded-lg bg-white'>
                    <div>
                        <img src={item.img[0].url} alt="" className='w-full h-60 object-cover'/>
                    </div>
                    <div className='p-4'>
                        <p className='font-bold text-md lg:py-3 py-1'>{item.name}</p>
                        <div className='flex justify-between text-xs'>
                            <p>{item.address}</p>
                            <p>{item.time}</p>
                        </div>
                        <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                            <p className='lg:text-xl text-md font-bold'>${item.price}</p>
                            <div>
                                <IoMdHeartEmpty size={30} className='lg:text-4xl text-xl mb-5 mr-5'/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardOne;