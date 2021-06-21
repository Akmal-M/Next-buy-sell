import Head from 'next/head'
import { useContext } from 'react'
import {DataContext} from '../store/GlobalState'
import Link from 'next/link'
import {FaCheck, FaEdit, FaTimes, FaTrashAlt} from "react-icons/fa";

const Users = () => {
    const {state, dispatch} = useContext(DataContext)
    const {users, auth, modal} = state

    if(!auth.user) return null;
    return(
        <div className="container mx-auto">
            <Head>
                <title>Users</title>
            </Head>

            <table className="table w-full">
                <thead>
                <tr>
                    <th>N</th>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Admin</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    users.map((user, index)=> (
                        <tr key={user._id} className='cursor-pointer'>
                            <th>{index + 1}</th>
                            <th>{user._id}</th>
                            <th>
                                <img src={user.avatar} alt={user.avatar}
                                     style={{
                                         width: '30px', height: '30px',
                                         overflow: 'hidden', objectFit: 'cover'
                                     }} />
                            </th>
                            <th>{user.name}</th>
                            <th>{user.phone}</th>
                            <th>
                                {
                                    user.role === 'admin'
                                        ? user.root ? <FaCheck className=" fa-check text-green-500"> Root</FaCheck>
                                        : <FaCheck className=" fa-check text-green-500"/>

                                        :<FaTimes className=" fa-times text-red-500"/>
                                }
                            </th>
                            <th className='flex justify-between px-5'>
                                <Link href={
                                    auth.user.root && auth.user.phone !== user.phone
                                        ? `/edit_user/${user._id}` : '#!'
                                }>
                                    <a><FaEdit className=" fa-edit text-blue-500 mr-2" title="Edit"/></a>
                                </Link>

                                {
                                    auth.user.root && auth.user.phone !== user.phone
                                        ? <FaTrashAlt className="  text-red-500 ml-2" title="Remove"
                                                      data-toggle="modal" data-target="#exampleModal"
                                                      onClick={() => dispatch({
                                                          type: 'ADD_MODAL',
                                                          payload: [{ data: users, id: user._id, title: user.name, type: 'ADD_USERS' }]
                                                      })}/>

                                        : <FaTrashAlt className="  text-danger ml-2" title="Remove"/>
                                }

                            </th>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
    )
}

export default Users

