import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const {notify} = state
    return (
        <div className='absolute z-50 '>
            {notify.loading && <Loading/>}
            {notify.error &&
            <Toast msg={{msg: notify.error, title:"Error"}}
                   handleShow={() => dispatch({type:'NOTIFY', payload:{} })}
                   bgColor='bg-red-400 p-5 rounded-md'/>}
            {notify.success &&
            <Toast msg={{msg: notify.success, title:"Success"}}
                   handleShow={() => dispatch({type:'NOTIFY', payload:{} })}
                   bgColor='bg-green-400 p-5 rounded-md'/>}
        </div>
    );
};

export default Notify;