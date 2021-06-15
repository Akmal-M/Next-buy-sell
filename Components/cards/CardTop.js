import React from 'react';
import useTranslation from "next-translate/useTranslation";
import CardOne from "./CardOne";
import productsData from "../../productsData";
import {IoMdHeartEmpty} from "react-icons/io";

const CardTop = () => {
    const {t,lang} = useTranslation();

    return (
        <div>
            <div className='lg:flex hidden '>
                    <div key={product._id}
                         className=' mx-5 p-2 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-44    cursor-pointer rounded-lg bg-white '>
                        <div>
                            <img src={img} alt="" className='w-40 h-32 object-cover'/>
                        </div>
                        <div >
                            <p className='font-bold text-xs  pt-2 pb-1 text-line-cut'>{name}</p>
                            <div className='flex justify-between text-small'>
                                <p>{address}</p>

                                <p>{time}</p>
                            </div>
                            <div className='flex justify-between '>
                                <p className='text-sm font-bold'>${price}</p>
                                <div>
                                    <IoMdHeartEmpty className='text-2xl '/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='lg:hidden flex'>

                    <div key={name}
                         className='lg:p-3 mx-1 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-28 cursor-pointer rounded-lg bg-white '>
                        <div>
                            <img src={img[0].url} alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className='text-cut'>
                            <p className='font-bold text-small py-1 text-line-cut'>{name}</p>
                            <div className='flex justify-between lg:text-small text-small'>
                                <p>{address}</p>

                                <p>{time}</p>
                            </div>
                            <div className='flex justify-between '>
                                <p className=' text-smaller font-bold'>${price}</p>
                                <div>
                                    <IoMdHeartEmpty size={16}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {/*<div className='lg:flex hidden '>*/}
            {/*    {productsData.top.map(item => (*/}
            {/*        <div key={item.name}*/}
            {/*             className=' mx-5 p-2 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-44    cursor-pointer rounded-lg bg-white '>*/}
            {/*            <div>*/}
            {/*                <img src={item.img[0].url} alt="" className='w-40 h-32 object-cover'/>*/}
            {/*            </div>*/}
            {/*            <div >*/}
            {/*                <p className='font-bold text-xs  pt-2 pb-1 text-line-cut'>{item.name}</p>*/}
            {/*                <div className='flex justify-between text-small'>*/}
            {/*                    <p>{item.address}</p>*/}

            {/*                    <p>{item.time}</p>*/}
            {/*                </div>*/}
            {/*                <div className='flex justify-between '>*/}
            {/*                    <p className='text-sm font-bold'>${item.price}</p>*/}
            {/*                    <div>*/}
            {/*                        <IoMdHeartEmpty className='text-2xl '/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>))}*/}
            {/*</div>*/}

            {/*<div className='lg:hidden flex'>*/}
            {/*    {productsData.top.map(item => (*/}
            {/*        <div key={item.name}*/}
            {/*             className='lg:p-3 mx-1 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-28 cursor-pointer rounded-lg bg-white '>*/}
            {/*            <div>*/}
            {/*                <img src={item.img[0].url} alt="" className='w-full h-full object-cover'/>*/}
            {/*            </div>*/}
            {/*            <div className='text-cut'>*/}
            {/*                <p className='font-bold text-small py-1 text-line-cut'>{item.name}</p>*/}
            {/*                <div className='flex justify-between lg:text-small text-small'>*/}
            {/*                    <p>{item.address}</p>*/}

            {/*                    <p>{item.time}</p>*/}
            {/*                </div>*/}
            {/*                <div className='flex justify-between '>*/}
            {/*                    <p className=' text-smaller font-bold'>${item.price}</p>*/}
            {/*                    <div>*/}
            {/*                        <IoMdHeartEmpty size={16}/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>))}*/}
            {/*</div>*/}
        </div>
    );
};

export default CardTop;