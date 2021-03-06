import React from 'react';
import "../styles/modal.scss"
import {MdClose} from "react-icons/md";

const Modal = (props) => {
    const data = props.data
    const closeModal = props.closeModal

    console.log(data, "modal");
    console.log(closeModal, "closeModal")

    return (
        <div>
            <div className="modal">
                <div className="w-14 h-14 rounded-full bg-white bg-opacity-50 flex items-center justify-center mx-3 my-3 cursor-pointer fixed top-0 lg:top-2 right-2 transition duration-500 ease-in-out transform hover:rotate-180">
                    <MdClose className="text-black text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl" onClick={closeModal}/>
                </div>
                <div className="w-full flex flex-col items-center text-center">
                    <div className="title-container">
                        <h2 className="text-black text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-extrabold mb-5 mt-10">{data.Heading}</h2>
                        <p className="text-black text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl mb-5">
                            {data.Description}
                        </p>
                    </div>
                    <div className="modal-container" style={{width: 99+'%'}}>
                        {data.Images.map((item, index) => (
                            <img className="mb-10" src={process.env["REACT_APP_API"]+ "/" + item.path} key={index} alt="oops sorry something wrong"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;