import Head from 'next/head'
import {useContext, useState} from 'react'
import {DataContext} from '../../store/GlobalState'
import {updateItem} from '../../store/Actions'
import { postData, putData } from "../../utils/fetchingData";
import {FaEdit, FaTrash} from "react-icons/fa";

const MiniCategories = () => {
    const [name, setName] = useState('')

    const {state, dispatch} = useContext(DataContext)
    const {minicategories, auth} = state

    const [id, setId] = useState('')

    const createCategory = async () => {
        if(auth.user.role !== 'admin')
            return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

        if(!name) return dispatch({type: 'NOTIFY', payload: {error: 'Name can not be left blank.'}})

        dispatch({type: 'NOTIFY', payload: {loading: true}})

        let res;
        if(id){
            res = await putData(`minicategories/${id}`, {name}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
            dispatch(updateItem(minicategories, id, res.category, 'ADD_MINI_CATEGORIES'))

        }else{
            res = await postData('minicategories', {name}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
            dispatch({type: "ADD_MINI_CATEGORIES", payload: [...minicategories, res.newCategory]})
        }
        setName('')
        setId('')
        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
    }

    const handleEditCategory = (category) => {
        setId(category._id)
        setName(category.name)
    }

    return(
        <div className="mt-10 mx-auto max-w-xl">
            <Head>
                <title>Mini Categories</title>
            </Head>

            <div className="flex justify-center">
                <input type="text" className="outline-none border border-gray-300 h-12 w-60 px-5"
                       placeholder="Add a new category" value={name}
                       onChange={e => setName(e.target.value)} />

                <button className="btn btn-secondary ml-1 bg-yellow-300 py-3 lg:px-10 px-5 outline-none border-none"
                        onClick={createCategory}>
                    {id ? "Update": "Create"}
                </button>
            </div>

            {
                minicategories.map(category => (
                    <div key={category._id} className="my-2 capitalize mx-5 mt-10">
                        <div className="flex justify-between">
                            {category.name}

                            <div className='cursor-pointer flex '>
                              <div className='mx-5'>
                                  <FaEdit/>
                              </div>
                                <FaTrash
                                   data-toggle="modal" data-target="#exampleModal"
                                   onClick={() => dispatch({
                                       type: 'ADD_MODAL',
                                       payload: [{
                                           data: minicategories, id: category._id,
                                           title: category.name, type: 'ADD_MINI_CATEGORIES'
                                       }]
                                   })}/>
                            </div>

                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default MiniCategories