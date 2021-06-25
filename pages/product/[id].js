import Head from 'next/head'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchingData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'
import DetailsSlider from "../../Components/DetailsSlider";
import {AiOutlineHeart} from "react-icons/ai";
import {GiPhone} from "react-icons/gi";
import useTranslation from "next-translate/useTranslation";

const DetailProduct = (props) => {
    const {t} = useTranslation();
    const [product] = useState(props.product)
    const [open, setOpen] = useState(false)

    const { state, dispatch } = useContext(DataContext)
    const {  auth, cart, notify } = state


console.log(state)
console.log(notify)


    return(
        <div className="row detail_page container mx-auto lg:px-40">
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className="">


                <div className="flex justify-center"  >
                       <DetailsSlider product={product}/>
                </div>
            </div>

            <div className="col-md-6 mt-3 px-3">
                <h2 className="text-uppercase font-bold lg:text-3xl text-xl">{product.title}</h2>
                <h5 className="lg:py-5 py-3 lg:text-2xl text-lg text-semibold">{product.price} $</h5>


                <div className="my-2">{product.description}</div>

               <div className='font-bold flex justify-end'>
                   {
                       open ?

                           <button type="button" className="bg-green-500 rounded-md text-white my-3 py-2 px-5 ">
                               <a href={`tel: '${product.phone}'`} className='flex justify-center'> <GiPhone size={25} className='mr-2'/> {product.phone}</a>
                           </button>
                           :
                           <button type="button" className="bg-gray-700 rounded-md text-white my-3 py-2 px-5 text-sm  lg:text-lg" onClick={() => setOpen(!open)}>
                               {t('Показать номер телефона')}
                           </button>
                   }
               </div>

                <button type="button" className=" my-3 px-5"
                        onClick={() => dispatch(addToCart(product, cart))}>
                    {/*{res.status(200) ? <AiFillHeart/>: <AiOutlineHeart/>}*/}
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

