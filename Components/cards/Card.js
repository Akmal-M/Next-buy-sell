import {IoMdHeartEmpty} from "react-icons/io";
import productsData from "../../productsData";
import Link from "next/link";
import {useContext} from "react";
import {DataContext} from "../../store/GlobalState";

const Card = ({product, handleCheck}) => {
    const { state, dispatch } = useContext(DataContext)
    const { cart, auth } = state

    const adminLink = () => {
        return(
            <>
                <Link href={`create/${product._id}`}>
                    <a className=""
                       style={{marginRight: '5px', flex: 1}}>Edit</a>
                </Link>
                <button className="bg-red-500 text-white rounded-full px-2 py-2"
                        style={{marginLeft: '5px', flex: 1}}
                        data-toggle="modal" data-target="#exampleModal"
                        onClick={() => dispatch({
                            type: 'ADD_MODAL',
                            payload: [{
                                data: '', id: product._id,
                                title: product.title, type: 'DELETE_PRODUCT'
                            }]
                        })} >
                    Delete
                </button>
            </>
        )
    }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 lg:max-w-7xl  container mx-auto  '>
            {productsData.top.map(item => (
                <div key={item.name}
                    className='lg:p-3 p-1 lg:mb-10 mb-5 smooth-shadow hover:smooth-hover lg:max-h-96 cursor-pointer rounded-lg bg-white '>
                    <div>
                        <img src={item.img[0].url} alt="" className='w-full lg:h-56 h-36 object-cover'/>
                    </div>
                    <div>
                        <p className='font-bold lg:text-md text-xs  lg:py-3 py-1'>{item.name}</p>
                        <div className='flex justify-between lg:text-xs text-small'>
                            <p>{item.address}</p>

                            <p>{item.time}</p>
                        </div>
                        {!auth.user || auth.user.role !== "admin" ? adminLink() :
                        <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                            <p className='lg:text-xl text-md font-bold'>${item.price}</p>
                            <div>
                                <IoMdHeartEmpty className='lg:text-3xl text-xl'/>
                            </div>
                        </div>}
                    </div>
                </div>))}
        </div>
    );
};

export default Card;