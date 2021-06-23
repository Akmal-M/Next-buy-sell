import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from "../store/GlobalState";
import valid from "../utils/valid";
import {patchData} from "../utils/fetchingData";

const Repassword = () => {

    const initialSate = {
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

    return (
       <div className='flex justify-center items-center'>
           <div>
               <div className="form-group">
                   <label htmlFor="password">New Password</label>
                   <input type="password" name="password" value={password} className="form-control"
                          placeholder="Your new password" onChange={handleChange} />
               </div>

               <div className="form-group">
                   <label htmlFor="cf_password">Confirm New Password</label>
                   <input type="password" name="cf_password" value={cf_password} className="form-control"
                          placeholder="Confirm new password" onChange={handleChange} />
               </div>

               <button className="rounded-md bg-green-500 py-1 px-5 text-white" disabled={notify.loading}
                       onClick={handleUpdateProfile}>
                   Update
               </button>
           </div>
       </div>
    );
};

export default Repassword;