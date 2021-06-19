import React from 'react';
import {FcAddImage} from "react-icons/fc";

const ImageUpload = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-4">
                <button className="flex justify-center items-center p-14 bg-gray-100">
                    <FcAddImage size={40}/>
                </button>
                <button className="flex justify-center items-center p-14 bg-gray-100">
                    <FcAddImage size={40}/>
                </button>
                <button className="flex justify-center items-center p-14 bg-gray-100">
                    <FcAddImage size={40}/>
                </button>
                <button className="flex justify-center items-center p-14 bg-gray-100">
                    <FcAddImage size={40}/>
                </button>
            </div>
        </div>
    );
};

export default ImageUpload;