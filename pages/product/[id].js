import Head from 'next/head'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchingData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'
import DetailsSlider from "../../Components/DetailsSlider";
import {AiOutlineHeart} from "react-icons/ai";

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [tab, setTab] = useState(0)
    const [open, setOpen] = useState(false)

    const { state, dispatch } = useContext(DataContext)
    const {  auth, cart } = state


console.log(state)


    return(
        <div className="row detail_page container mx-auto lg:px-40">
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className="">

                <div className="flex justify-center"  >

                    {product.images.map((img, index) => (
                       <DetailsSlider img={img}/>
                    ))}

                </div>
            </div>

            <div className="col-md-6 mt-3 px-3">
                <h2 className="text-uppercase font-bold lg:text-3xl text-xl">{product.title}</h2>
                <h5 className="lg:py-5 py-3 lg:text-2xl text-lg text-semibold">{product.price} $</h5>


                <div className="my-2">{product.description}</div>

               <div className='font-bold flex justify-end'>
                   {
                       open ?

                           <div className='text-2xl'>
                                <a href={`tel: '${product.phone}'`} >{product.phone}</a>
                           </div>
                           :
                           <button type="button" className="bg-gray-700 rounded-md text-white my-3 px-5" onClick={() => setOpen(!open)}>
                               Show Phone Number
                           </button>
                   }
               </div>

                <button type="button" className="btn btn-dark d-block my-3 px-5"
                        onClick={() => dispatch(addToCart(product, cart))} >
                    <AiOutlineHeart/>
                </button>

            </div>
        </div>
    )
}

export async function getServerSideProps({params: {id}}) {

    const res = await getData(`product/${id}`)
    // server side rendering
    return {
        props: { product: res.product }, // will be passed to the page component as props
    }
}


export default DetailProduct

