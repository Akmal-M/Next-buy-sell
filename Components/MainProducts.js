import React, {useState} from 'react';
import { AiOutlineTable} from "react-icons/ai";
import ProductsTwo from "./cards/ProductsTwo";
import ProductsOne from "./cards/ProductsOne";
import ProductsInfo from "./cards/ProductsInfo";
import {CgToggleSquare} from "react-icons/cg";
import {IoMdSquareOutline} from "react-icons/io";
import {BiGridAlt} from "react-icons/bi";
import SearchPlace from "./search/SearchPlace";
import useTranslation from "next-translate/useTranslation";

const MainProducts = ({product}) => {
    const {t, lang} = useTranslation();
    const [grid,setGrid] =useState('')

    return (
        <div>
            <div className='lg:mt-5 mt-10 mb-5 bg-gray-50 lg:py-2 py-1 lg:mb-10'>
                <div className='flex text-right  justify-between lg:mx-32 mr-5 '>
                    <div className='lg:hidden '>
                        <SearchPlace/>
                    </div>
                    <p className=' lg:flex hidden text-center text-sm lg:text-2xl text-gray-700 '>{t('Все объявления')}</p>
                    <div  className='flex items-center text-gray-400'>
                        <div className='mx-3 lg:hidden  text-3xl cursor-pointer' onClick={ () => setGrid('two') }><BiGridAlt/></div>
                        <div className='mr-3 lg:hidden text-3xl mt-0.5 cursor-pointer' onClick={() => setGrid('one') } ><IoMdSquareOutline/></div>
                        <div className='mx-3 lg:flex hidden text-4xl cursor-pointer' onClick={ () => setGrid('two') }><AiOutlineTable/></div>
                        <div className='lg:text-4xl text-3xl font-thin cursor-pointer' onClick={ () => setGrid('three') }><CgToggleSquare/></div>
                    </div>
                </div>

            </div>
            <p className='lg:hidden flex text-center text-sm lg:text-2xl text-gray-700 lg:mb-10 mb-5'>{t('Все объявления')}</p>

            {grid === 'one' && <ProductsOne product={product}/>}  {grid === 'two' && <ProductsTwo product={product}/>}  { grid === 'three' && <ProductsInfo product={product}/> } { grid === '' && <ProductsTwo product={product}/> }


        </div>
    );
};

export default MainProducts;