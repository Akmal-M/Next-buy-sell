import {IoMdHeartEmpty} from "react-icons/io";
import {addToCart} from "../../store/Actions";
import {useContext} from "react";
import {DataContext} from "../../store/GlobalState";
import Link from 'next/link'

const CardTop = (products) => {
    const {state, dispatch} = useContext(DataContext)
    const {cart, auth} = state

    return (
        <div>
            {products.map(product => (
                <div key={product._id}>
                    <div className='lg:block hidden '>
                        <div
                            className=' lg:mx-5 mx-1 p-2 lg:my-10 mb-5 smooth-shadow hover:smooth-hover w-44    cursor-pointer rounded-lg bg-white '>
                            <Link href={`product/${product._id}`}>
                                <a>
                                    <img src={product.images[0].url} alt="" className='w-40 h-32 object-cover'/>
                                </a>
                            </Link>
                            <div>
                                <Link href={`product/${product._id}`}>
                                    <a className='font-bold text-xs  pt-2 pb-1 text-line-cut'>{product.name}</a>
                                </Link>
                                <div className='flex justify-between text-small'>
                                    <p>{product.location}</p>

                                    <p>{product.createdAt.replace('T', ' / ').slice(0, -8)}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p className='text-sm font-bold'>${product.price}</p>
                                    <div>
                                        <IoMdHeartEmpty className='text-2xl '
                                                        onClick={() => dispatch(addToCart(product, cart))}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden flex'>

                        <div key={product._id}
                             className='lg:p-3 mx-1 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover w-28 cursor-pointer rounded-lg bg-white '>
                            <div>
                                <img src={product.images[0].url} alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className='text-cut'>
                                <p className='font-bold text-small py-1 text-line-cut'>{product.name}</p>
                                <div className='flex justify-between lg:text-small text-small'>
                                    <p>{product.address}</p>

                                    <p>{product.time}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p className=' text-smaller font-bold'>${product.price}</p>
                                    <div>
                                        <IoMdHeartEmpty size={16}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }


        </div>

    )
};

export default CardTop