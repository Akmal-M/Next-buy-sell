import React, {useState} from 'react';
import {BsSquare} from "react-icons/bs";
import { AiOutlineTable} from "react-icons/ai";
import ProductsTwo from "./cards/ProductsTwo";
import ProductsOne from "./cards/ProductsOne";
import ProductsInfo from "./cards/ProductsInfo";
import {CgToggleSquare} from "react-icons/cg";
import {IoMdSquareOutline} from "react-icons/io";
import {BiGridAlt} from "react-icons/bi";

const MainProducts = () => {
    const [grid,setGrid] =useState('')

    return (
        <div>
            <div className='lg:mt-16 mt-10 mb-5 bg-gray-50 py-3'>
                <div className='flex text-right '>
                    <div  className='flex items-center text-gray-400'>
                        <div className='mx-5 lg:hidden  text-4xl cursor-pointer' onClick={ () => setGrid('two') }><BiGridAlt/></div>
                        <div className='mr-5 lg:hidden text-4xl mt-0.5 cursor-pointer' onClick={() => setGrid('one') } ><IoMdSquareOutline/></div>
                        <div className='mx-5 lg:flex hidden text-4xl cursor-pointer' onClick={ () => setGrid('two') }><AiOutlineTable/></div>
                        <div className='lg:text-4xl text-4xl font-thin cursor-pointer' onClick={ () => setGrid('three') }><CgToggleSquare/></div>
                    </div>
                </div>
            </div>

            {
                grid === 'one' ?
                    <ProductsOne/> : grid === 'two' ? <ProductsTwo/> : grid === 'three' ? <ProductsInfo/> : <ProductsTwo/>
            }

        </div>
    );
};

export default MainProducts;