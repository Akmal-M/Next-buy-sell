import {IoHeart} from "react-icons/io5";
import Link from 'next/link'
import {DataContext} from "../store/GlobalState";
import {useContext} from "react";
import {useStore} from "react-hookstore";

const CartItem = ({item, dispatch, cart}) => {
    const [ show, setShow ] = useStore('showStore');

    return (
        <>
            <div className= 'flex  gap-5  container mx-auto  pb-10'>
                <div key={item._id}
                     className='lg:p-3 p-1   smooth-shadow hover:smooth-hover  cursor-pointer rounded-lg bg-white'>
                    <Link href={`/product/${item._id}`}>
                    <div>
                        <img src={item.images[0].url} alt="" className='lg:w-full lg:h-60 h-32 object-cover'/>
                    </div>
                    </Link>
                    <div className='px-4 pt-2'>
                        <p className='font-bold text-sm lg:py-3 py-1'>{item.title}</p>
                        <div className='flex justify-between text-xs mt-4'>
                            <p>{item.location}</p>
                            <p>{item.createdAt.replace( 'T',  ' / ').slice(0,-8)}</p>
                        </div>
                        <div className='flex justify-between lg:pt-3 py-1 lg:px-3 px-1 mt-1'>
                            <p className='lg:text-xl text-md font-bold'>${item.price}</p>

                            <div onClick={() => setShow(!show)}>
                                <IoHeart size={30} className='lg:text-4xl text-xl pb-2'
                                          data-toggle="modal" data-target="#exampleModal"
                                         onClick={() => dispatch({
                                             type: 'ADD_MODAL',
                                             payload: [{ data: cart, id: item._id, title: item.title, type: 'ADD_CART' }]
                                         }) }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default CartItem