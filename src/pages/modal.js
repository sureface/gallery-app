import React from 'react';
import "../styles/modal.scss"
import {MdClose} from "react-icons/md";

const Modal = (props) => {
    const data = props.data
    const closeModal = props.closeModal

    return (
        <div>
            <div className="modal">
                <MdClose className="text-white text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl mx-3 my-3 cursor-pointer fixed top-0 lg:top-2 right-2" onClick={closeModal}/>
                <div className="modal_body w-full flex flex-col items-center text-center">
                    <h2 className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-extrabold mb-5">{data.album.title}</h2>
                    <p className="text-white text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl mb-5">
                        {data.album.subtitle}
                    </p>
                    <img className="mb-10" src={data.album.images[0]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[1]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[2]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[3]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[4]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[5]} alt="oops sorry something wrong"/>
                    <img className="mb-10" src={data.album.images[6]} alt="oops sorry something wrong"/>
                </div>
            </div>
        </div>
    );
};

export default Modal;