import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import Link from 'next/link'

import valid from '../utils/valid'
import { patchData } from '../utils/fetchingData'

import {imageUpload} from '../utils/imageUpload'
import {BiCamera} from "react-icons/bi";

const Profile = () => {
    const initialSate = {
        avatar: '',
        name: '',
        password: '',
        cf_password: ''
    }
    const [data, setData] = useState(initialSate)
    const { avatar, name, password, cf_password } = data

    const {state, dispatch} = useContext(DataContext)
    const { auth, notify, orders } = state

    useEffect(() => {
        if(auth.user) setData({...data, name: auth.user.name})
    },[auth.user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({...data, [name]:value})
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleUpdateProfile = e => {
        e.preventDefault()
        if(password){
            const errMsg = valid(name, auth.user.phone, password, cf_password)
            if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
            updatePassword()
        }

        if(name !== auth.user.name || avatar) updateInfo()
    }

    const updatePassword = () => {
        dispatch({ type: 'NOTIFY', payload: {loading: true} })
        patchData('user/resetPassword', {password}, auth.token)
            .then(res => {
                if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
                return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
            })
    }

    const changeAvatar = (e) => {
        const file = e.target.files[0]
        if(!file)
            return dispatch({type: 'NOTIFY', payload: {error: 'File does not exist.'}})

        if(file.size > 1024 * 1024) //1mb
            return dispatch({type: 'NOTIFY', payload: {error: 'The largest image size is 1mb.'}})

        if(file.type !== "image/jpeg" && file.type !== "image/png") //1mb
            return dispatch({type: 'NOTIFY', payload: {error: 'Image format is incorrect.'}})

        setData({...data, avatar: file})
    }

    const updateInfo = async () => {
        let media;
        dispatch({type: 'NOTIFY', payload: {loading: true}})

        if(avatar) media = await imageUpload([avatar])

        patchData('user', {
            name, avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token).then(res => {
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

            dispatch({type: 'AUTH', payload: {
                    token: auth.token,
                    user: res.user
                }})
            return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        })
    }


    if(!auth.user) return null;
    return(
        <div className="profile_page">
            <Head>
                <title>Profile</title>
            </Head>

            <section className="row text-secondary my-3">
                <div className="col-md-4">
                    <h3 className="text-center text-uppercase">
                        {auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'}
                    </h3>

                    <div className="avatar">
                        <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                             alt="avatar" className='w-60 h-60'/>
                        <span>
                            <BiCamera/>
                            <p>Change</p>
                            <input type="file" name="file" id="file_up"
                                   accept="image/*" onChange={changeAvatar} />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} className="form-control"
                               placeholder="Your name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" defaultValue={auth.user.phone}
                               className="form-control px-5" disabled={true} placeholder={auth.user.phone}/>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="password">New Password</label>*/}
                    {/*    <input type="password" name="password" value={password} className="form-control"*/}
                    {/*           placeholder="Your new password" onChange={handleChange} />*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="cf_password">Confirm New Password</label>*/}
                    {/*    <input type="password" name="cf_password" value={cf_password} className="form-control"*/}
                    {/*           placeholder="Confirm new password" onChange={handleChange} />*/}
                    {/*</div>*/}

                    <button className="rounded-md bg-green-500 py-1 px-5 text-white" disabled={notify.loading}
                            onClick={handleUpdateProfile}>
                        Update
                    </button>
                </div>

                <div>
                    products here
                </div>
            </section>
        </div>
    )
}

export default Profile