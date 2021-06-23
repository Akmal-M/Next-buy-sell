import {AiOutlineClose} from "react-icons/ai";

const Toast = ({msg, handleShow, bgColor}) => {
    return(
        <div className={`toast show fixed text-white   ${bgColor}`}
             style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px' }} >

            <div className={`toast-header ${bgColor} text-light`}>
                <p className="m-auto text-light absolute top-3">{msg.title}</p>

                <button type="button" className="ml-2 mb-1 close text-light absolute top-3 right-3"
                        data-dismiss="toast" style={{ outline: 'none'}}
                        onClick={handleShow}><AiOutlineClose size={30} /></button>
            </div>

            <div className="toast-body">{msg.msg}</div>

        </div>
    )
}

export default Toast