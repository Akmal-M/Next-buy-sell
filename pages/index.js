import {getData} from "../utils/fetchingData";
import React, {useContext, useEffect, useState} from "react";
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
import {DataContext} from "../store/GlobalState";
import filterSearch from "../utils/filterSearch";
import {useRouter} from 'next/router'
import Head from 'next/head'
import Filter from "../Components/ Filter";

const Home = (props) => {

    const {t} = useTranslation()
    const [grid, setGrid] = useState('')

    const {state, dispatch} = useContext(DataContext)
    const {categories, auth} = state
    console.log(categories[0])

    const [products, setProducts] = useState(props.products)

    const [isCheck, setIsCheck] = useState(false)
    const [page, setPage] = useState(1)
    const router = useRouter()



    useEffect(() => {
        setProducts(props.products)
    },[props.products])

    useEffect(() => {
        if(Object.keys(router.query).length === 0) setPage(1)
    },[router.query])

    const handleCheck = (id) => {
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const handleCheckALL = () => {
        products.forEach(product => product.checked = !isCheck)
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const handleDeleteAll = () => {
        let deleteArr = [];
        products.forEach(product => {
            if(product.checked){
                deleteArr.push({
                    data: '',
                    id: product._id,
                    title: 'Delete all selected products?',
                    type: 'DELETE_PRODUCT'
                })
            }
        })

        dispatch({type: 'ADD_MODAL', payload: deleteArr})
    }

    const handleLoadmore = () => {
        setPage(page + 1)
        filterSearch({router, page: page + 1})
    }

    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            
            <Header/>


            {/*<Filter state={state}/>*/}


            <div className='bg-gray-50'>
                {
                    auth.user && auth.user.role === 'admin' && auth.user.root &&
                    <div className="delete_all btn btn-danger mt-2" style={{marginBottom: '-10px'}}>
                        <input type="checkbox" checked={isCheck} onChange={handleCheckALL}
                               style={{width: '25px', height: '25px', transform: 'translateY(8px)'}} />

                        <button className="btn btn-danger ml-2"
                                data-toggle="modal" data-target="#exampleModal"
                                onClick={handleDeleteAll}>
                            DELETE ALL
                        </button>
                    </div>
                }

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
                {
                    props.result < page * 6 ? ""
                        : <button className=" text-white bg-green-400 rounded-md py-2 px-3 block mx-auto mb-4"
                                  onClick={handleLoadmore}>
                            Load more
                        </button>
                }
            </div>
        </div>
    );
};


export async function getServerSideProps({query}) {
    const page = query.page || 1
    const category = query.category || 'all'
    const sort = query.sort || ''
    const search = query.search || 'all'

    const res = await getData(
        `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
    )
    // server side rendering
    return {
        props: {
            products: res.products,
            result: res.result
        }, // will be passed to the page component as props
    }
}


export default Home;