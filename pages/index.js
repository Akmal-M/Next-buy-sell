import {getData} from "../utils/fetchingData";
import React, {useState} from "react";
import CardTwo from "../Components/cards/CardTwo";
import CardInfo from "../Components/cards/CardInfo";
import CardOne from "../Components/cards/CardOne";
import SearchPlace from "../Components/search/SearchPlace";
import {BiGridAlt} from "react-icons/bi";
import {IoMdSquareOutline} from "react-icons/io";
import {AiOutlineTable} from "react-icons/ai";
import {CgToggleSquare} from "react-icons/cg";
import useTranslation from "next-translate/useTranslation";
import Header from "../Components/navbar/Header";

const Home = (props) => {
    const [products] = useState(props.products)
    const {t} = useTranslation()
    const [grid, setGrid] = useState('')

    console.log(products)
    return (
        <div>
            <Header/>
            <div className='bg-gray-50'>

                <div className='lg:mt-5 bg-gray-50 lg:py-2 py-1 lg:mb-10'>
                    <div className='flex text-right  justify-between lg:mx-32 mr-5 bg-gray-200 p-3 rounded-md'>
                        <div className='lg:hidden '>
                            <SearchPlace/>
                        </div>
                        <p className=' lg:flex hidden text-center text-sm lg:text-2xl text-gray-700 '>{t('Все объявления')}</p>
                        <div className='flex items-center text-gray-400'>
                            <div className='mx-3 lg:hidden  text-3xl cursor-pointer' onClick={() => setGrid('two')}>
                                <BiGridAlt/></div>
                            <div className='mr-3 lg:hidden text-3xl mt-0.5 cursor-pointer' onClick={() => setGrid('one')}>
                                <IoMdSquareOutline/></div>
                            <div className='mx-3 lg:flex hidden text-4xl cursor-pointer' onClick={() => setGrid('two')}>
                                <AiOutlineTable/></div>
                            <div className='lg:text-4xl text-3xl font-thin cursor-pointer' onClick={() => setGrid('three')}>
                                <CgToggleSquare/></div>
                        </div>
                    </div>

                </div>
                <p className='lg:hidden flex text-center text-sm lg:text-2xl text-gray-700 lg:mb-10 mb-5'>{t('Все объявления')}</p>


                <div className="products">

                    {grid === '' &&
                    <div
                        className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 lg:max-w-7xl  container mx-auto'>
                        {
                            products.length === 0
                                ? <h2>No Products</h2>

                                : products.map(product => (
                                    <CardTwo key={product._id} product={product}/>
                                ))
                        }
                    </div>
                    }
                    {grid === 'two' &&
                    <div
                        className='grid lg:grid-cols-4 md:grid-cols-3 lg:gap-5 grid-cols-2 lg:max-w-7xl  container mx-auto'>
                        {
                            products.length === 0
                                ? <h2>No Products</h2>

                                : products.map(product => (
                                    <CardTwo key={product._id} product={product}/>
                                ))
                        }
                    </div>
                    }
                    {grid === 'three' &&
                    <div>
                        {
                            products.length === 0
                                ? <h2>No Products</h2>

                                : products.map(product => (
                                    <CardInfo key={product._id} product={product}/>
                                ))
                        }
                    </div>
                    }
                    {grid === 'one' &&
                    <div className='grid md:grid-cols-3  gap-5 lg:max-w-7xl  container mx-auto  lg:pb-52 pb-10'>
                        {products.length === 0 ? <h2>No Products</h2> : products.map(product => (
                            <CardOne key={product._id} product={product}/>))}</div>}
                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps() {
    const res = await getData('product')
    console.log(res)
    // server side rendering
    return {
        props: {
            products: res.products,
            result: res.result
        }, // will be passed to the page component as props
    }
}


export default Home;