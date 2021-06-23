import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'
import { getData, postData } from '../utils/fetchingData'
import { useRouter } from 'next/router'


const Cart = () => {
    const { state, dispatch } = useContext(DataContext)
    const { cart, auth, orders } = state

    const [total, setTotal] = useState(0)

    const [callback, setCallback] = useState(false)
    const router = useRouter()



    useEffect(() => {
        const cartLocal = JSON.parse(localStorage.getItem('buy_sold_by_Akmal'))
        if(cartLocal && cartLocal.length > 0 ){
            let newArr = []
            const updateCart = async () => {
                for (const item of cartLocal){
                    const res = await getData(`product/${item._id}`)
                    const { _id, title, images, price, description,location,productcategory,createdAt,phone } = res.product
                        newArr.push({
                            _id, title, images, price, description, location,productcategory,createdAt,phone
                        })
                 }

                dispatch({ type: 'ADD_CART', payload: newArr })
            }

            updateCart()
        }
    },[callback])


    if( cart.length === 0 )
        return <img className="w-full h-full flex justify-center items-center" src="https://res.cloudinary.com/bulutvoy/image/upload/v1620465104/cart/empty-box_2_n12qzo.png" alt="empty cart"/>

    return(
        <div className="row mx-auto">
            <Head>
                <title>Favourite Page</title>
            </Head>

            <div className="col-md-8 text-secondary table-responsive my-3">
                <h2 className="text-uppercase text-center font-bold py-5 lg:py-10 lg:text-3xl">{('Избранные')}</h2>

                <table className="table my-3">
                    <tbody className='grid lg:grid-cols-4 gap-5 grid-cols-2 lg:mx-10 mx-3'>
                    {
                        cart.map(item => (
                            <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Cart
