import {IoMdHeartEmpty} from "react-icons/io";
import productsData from "../../productsData";
import Link from "next/link";
import {useContext} from "react";
import {DataContext} from "../../store/GlobalState";
import {addToCart} from "../../store/Actions";

const  CardTwo = ({product, handleCheck}) => {
    const {state, dispatch} = useContext(DataContext)
    const {cart, auth} = state


    console.log(auth)
    const adminLink = () => {
        return (
            <div className='flex justify-center items-center'>

                <Link href={`create/${product._id}`}>
                    <a className="bg-gray-500 py-1.5 px-4 rounded-md text-white text-center"
                       style={{marginRight: '5px', flex: 1}}>Edit</a>
                </Link>
                <button className="bg-red-500 text-white rounded-md px-2 py-1.5"
                        style={{marginLeft: '5px', flex: 1}}
                        data-toggle="modal" data-target="#exampleModal"
                        onClick={() => dispatch({
                            type: 'ADD_MODAL',
                            payload: [{
                                data: '', id: product._id,
                                title: product.title, type: 'DELETE_PRODUCT'
                            }]
                        })}>
                    Delete
                </button>
            </div>
        )
    }
    return (
        <div className=' lg:px-0 px-2 ' key={product._id}>
            <div className=''>
                <div
                    className='lg:p-3 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover lg:max-h-96 cursor-pointer rounded-lg bg-white '>

                    <Link href={`product/${product._id}`}>
                        <a>
                            <div>
                                <img src={product.images[0].url} alt="" className='w-full lg:h-56 h-36 object-cover'/>
                            </div>
                            <div>
                                <p className='font-bold lg:text-md text-xs  lg:py-3 py-1'>{product.title}</p>
                                <div className='flex justify-between lg:text-xs text-small'>
                                    <p>{product.address}</p> <p>{product.time}</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <div>
                        {!auth.user &&
                        <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                            <p className='lg:text-xl text-md font-bold'>${product.price}</p>
                            <div>
                                <IoMdHeartEmpty className='lg:text-3xl text-xl'/>
                            </div>
                        </div>
                            || auth.user.role === "user" ?
                                <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                                    <p className='lg:text-xl text-md font-bold'>${product.price}</p>
                                    <div>
                                        <IoMdHeartEmpty className='lg:text-3xl text-xl'
                                                        onClick={() => dispatch(addToCart(product, cart))}/>
                                    </div>
                                </div>
                                : adminLink()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTwo;