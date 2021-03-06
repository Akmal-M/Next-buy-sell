import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import {DataContext} from '../../store/GlobalState'
import {updateItem} from '../../store/Actions'

import {useRouter} from 'next/router'
import {patchData} from '../../utils/fetchingData'
import {BiLeftArrow} from "react-icons/bi";

const EditUser = () => {
    const router = useRouter()
    const { id }= router.query

    const {state, dispatch} = useContext(DataContext)
    const {auth, users} = state

    const [editUser, setEditUser] = useState([])
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [num, setNum] = useState(0)

    useEffect(() => {
        users.forEach(user => {
            if(user._id === id){
                setEditUser(user)
                setCheckAdmin(user.role === 'admin')
            }
        })
    },[users])

    const handleCheck = () => {
        setCheckAdmin(!checkAdmin)
        setNum(num + 1)
    }

    const handleSubmit = () => {
        let role = checkAdmin ? 'admin' : 'user'
        if(num % 2 !== 0){
            dispatch({type: 'NOTIFY', payload: {loading: true}})
            patchData(`user/${editUser._id}`, {role}, auth.token)
                .then(res => {
                    if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

                    dispatch(updateItem(users, editUser._id, {
                        ...editUser, role
                    }, 'ADD_USERS'))

                    return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
                })
        }

    }


    return (
        <div className="flex justify-center my-3">
            <Head>
                <title>Edit User</title>
            </Head>

            <div>
                <button className="flex justify-center items-center mx-5 bg-gray-700 rounded-md text-white py-1 px-5" onClick={() => router.back()}>
                    <BiLeftArrow/> Go Back
                </button>
            </div>

            <div className="flex justify-center items-center mx-auto my-4">
                <h2 className="text-uppercase text-secondary">Edit User</h2>

                <div className="form-group">
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" id="name" defaultValue={editUser.name} disabled />
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="block">Phone</label>
                    <input type="text" id="phone" defaultValue={editUser.phone} disabled />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="isAdmin" checked={checkAdmin}
                           style={{width: '20px', height: '20px'}} onChange={handleCheck} />

                    <label htmlFor="isAdmin" style={{transform: 'translate(4px, -3px)'}}>
                        isAdmin
                    </label>
                </div>

                <button className="flex justify-center items-center mx-5 bg-gray-700 rounded-md text-white py-1 px-5" onClick={handleSubmit}>Update</button>

            </div>

        </div>
    )
}

export default EditUser