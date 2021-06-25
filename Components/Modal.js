import {useContext} from 'react'
import { DataContext } from '../store/GlobalState'
import { deleteItem } from '../store/Actions'
import { deleteData } from '../utils/fetchingData'
import {useRouter} from 'next/router'
import useTranslation from "next-translate/useTranslation";
import {AiOutlineClose} from "react-icons/ai";
import { createStore, useStore } from 'react-hookstore';
createStore('showStore', false);

const Modal = () => {
    const {t} = useTranslation()
    const [show, setShow] =useStore('showStore')
    const {state, dispatch} = useContext(DataContext)
    const { modal, auth } = state
    const router = useRouter()

    const deleteUser = (item) => {
        dispatch(deleteItem(item.data, item.id, item.type))

        deleteData(`user/${item.id}`, auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
            })
    }

    const deleteCategories = (item) => {
        deleteData(`categories/${item.id}`, auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

                dispatch(deleteItem(item.data, item.id, item.type))
                return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
            })
    }

    const deleteProduct = (item) => {
        dispatch({type: 'NOTIFY', payload: {loading: true}})
        deleteData(`product/${item.id}`, auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                dispatch({type: 'NOTIFY', payload: {success: res.msg}})
                return router.push('/')
            })
    }

    const handleSubmit = () => {
        if(modal.length !== 0){
            for(const item of modal){
                if(item.type === 'ADD_CART'){
                    dispatch(deleteItem(item.data, item.id, item.type))
                }

                if(item.type === 'ADD_USERS') deleteUser(item)

                if(item.type === 'ADD_CATEGORIES') deleteCategories(item)

                if(item.type === 'DELETE_PRODUCT') deleteProduct(item)

                dispatch({ type: 'ADD_MODAL', payload: [] })
            }
        }
    }

    return(
        <div className={show ? "modal fade show  fixed top-0 left-0 w-full h-full outline-none fade flex justify-center" : "modal fade  fixed top-0 left-0 w-full h-full outline-none fade"} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative bg-green-50 w-96 p-3 rounded-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title capitalize" id="exampleModalLabel">
                            {modal.length !== 0 && modal[0].title}
                        </h5>
                        <button type="button" className="close absolute right-3 top-3" data-dismiss="modal" aria-label="Close" onClick={() => setShow(!show)}>
                            <span aria-hidden="true"><AiOutlineClose size={20}/></span>
                        </button>
                    </div>
                    <div className="modal-body py-5">
                        {t('Do you want to remove this item?')}
                    </div>
                    <div className="modal-footer flex justify-center" onClick={() => setShow(!show)}>
                        <button type="button" className="py-1 px-3 rounded-md text-white bg-purple-400  mx-5" data-dismiss="modal" onClick={ handleSubmit}>{t('Yes')}</button>
                        <button type="button" className="py-1 px-3 rounded-md text-white bg-gray-400  mx-5" data-dismiss="modal" onClick={() => setShow(!show)}>{t('Cancel')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal