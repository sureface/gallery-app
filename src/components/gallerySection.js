import React, {useState} from 'react';

//styles
import "../styles/gallerySection.scss"

//icons
import {MdClose} from "react-icons/md"


import viewImage1 from "../assets/images/image1.jpg"
import viewImage2 from "../assets/images/image2.jpg"
import viewImage3 from "../assets/images/image3.jpg"
import viewImage4 from "../assets/images/image4.jpg"
import viewImage5 from "../assets/images/image5.jpg"
import viewImage6 from "../assets/images/image6.jpg"
import viewImage7 from "../assets/images/image7.jpg"
import viewImage8 from "../assets/images/image8.jpg"
import viewImage9 from "../assets/images/image9.jpg"

// album 1
import album1and1 from "../assets/images/albume1/tg1-1.jpg"
import album1and2 from "../assets/images/albume1/tg1-2.jpg"
import album1and3 from "../assets/images/albume1/tg1-3.jpg"
import album1and4 from "../assets/images/albume1/tg1-4.jpg"
import album1and5 from "../assets/images/albume1/tg1-5.jpg"
import album1and6 from "../assets/images/albume1/tg1-6.jpg"
import album1and7 from "../assets/images/albume1/tg1-7.jpg"

// album 2
import album2and1 from "../assets/images/albume2/tg2-1.jpg"
import album2and2 from "../assets/images/albume2/tg2-2.jpg"
import album2and3 from "../assets/images/albume2/tg2-3.jpg"
import album2and4 from "../assets/images/albume2/tg2-4.jpg"
import album2and5 from "../assets/images/albume2/tg2-5.jpg"
import album2and6 from "../assets/images/albume2/tg2-6.jpg"
import album2and7 from "../assets/images/albume2/tg2-7.jpg"

// album 3
import album3and1 from "../assets/images/albume3/tg3-1.jpg"
import album3and2 from "../assets/images/albume3/tg3-2.jpg"
import album3and3 from "../assets/images/albume3/tg3-3.jpg"
import album3and4 from "../assets/images/albume3/tg3-4.jpg"
import album3and5 from "../assets/images/albume3/tg3-5.jpg"
import album3and6 from "../assets/images/albume3/tg3-6.jpg"
import album3and7 from "../assets/images/albume3/tg3-7.jpg"

// album 4
import album4and1 from "../assets/images/albume4/tg4-1.jpg"
import album4and2 from "../assets/images/albume4/tg4-2.jpg"
import album4and3 from "../assets/images/albume4/tg4-3.jpg"
import album4and4 from "../assets/images/albume4/tg4-4.jpg"
import album4and5 from "../assets/images/albume4/tg4-5.jpg"
import album4and6 from "../assets/images/albume4/tg4-6.jpg"
import album4and7 from "../assets/images/albume4/tg4-7.jpg"

// album 5
import album5and1 from "../assets/images/albume5/tg5-1.jpg"
import album5and2 from "../assets/images/albume5/tg5-2.jpg"
import album5and3 from "../assets/images/albume5/tg5-3.jpg"
import album5and4 from "../assets/images/albume5/tg5-4.jpg"
import album5and5 from "../assets/images/albume5/tg5-5.jpg"
import album5and6 from "../assets/images/albume5/tg5-6.jpg"
import album5and7 from "../assets/images/albume5/tg5-7.jpg"

// album 6
import album6and1 from "../assets/images/albume6/tg6-1.jpg"
import album6and2 from "../assets/images/albume6/tg6-2.jpg"
import album6and3 from "../assets/images/albume6/tg6-3.jpg"
import album6and4 from "../assets/images/albume6/tg6-4.jpg"
import album6and5 from "../assets/images/albume6/tg6-5.jpg"
import album6and6 from "../assets/images/albume6/tg6-6.jpg"
import album6and7 from "../assets/images/albume6/tg6-7.jpg"

// album 7
import album7and1 from "../assets/images/albume7/tg7-1.jpg"
import album7and2 from "../assets/images/albume7/tg7-2.jpg"
import album7and3 from "../assets/images/albume7/tg7-3.jpg"
import album7and4 from "../assets/images/albume7/tg7-4.jpg"
import album7and5 from "../assets/images/albume7/tg7-5.jpg"
import album7and6 from "../assets/images/albume7/tg7-6.jpg"
import album7and7 from "../assets/images/albume7/tg7-7.jpg"

// album 8
import album8and1 from "../assets/images/albume8/tg8-1.jpg"
import album8and2 from "../assets/images/albume8/tg8-2.jpg"
import album8and3 from "../assets/images/albume8/tg8-3.jpg"
import album8and4 from "../assets/images/albume8/tg8-4.jpg"
import album8and5 from "../assets/images/albume8/tg8-5.jpg"
import album8and6 from "../assets/images/albume8/tg8-6.jpg"
import album8and7 from "../assets/images/albume8/tg8-7.jpg"

// album 9
import album9and1 from "../assets/images/albume9/tg9-1.jpg"
import album9and2 from "../assets/images/albume9/tg9-2.jpg"
import album9and3 from "../assets/images/albume9/tg9-3.jpg"
import album9and4 from "../assets/images/albume9/tg9-4.jpg"
import album9and5 from "../assets/images/albume9/tg9-5.jpg"
import album9and6 from "../assets/images/albume9/tg9-6.jpg"
import album9and7 from "../assets/images/albume9/tg9-7.jpg"


const GallerySection = () => {

    const [data, setData] = useState({
        activeObject: null,
        object: [
            {id: 1, text: "Lovely couples", imgUrl: viewImage1, album: [
                    {headerText: "Lovely couples", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album1and1, aUrl2: album1and2, aUrl3: album1and3, aUrl4: album1and4, aUrl5: album1and5, aUrl6: album1and6, aUrl7: album1and7}
                ]},
            {id: 2, text: "Winter Wonderland", imgUrl: viewImage2, album: [
                    {headerText: "Winter Wonderland", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album2and1, aUrl2: album2and2, aUrl3: album2and3, aUrl4: album2and4, aUrl5: album2and5, aUrl6: album2and6, aUrl7: album2and7}
                ]},
            {id: 3, text: "Coffee Time", imgUrl: viewImage3, album: [
                    {headerText: "Coffee Time", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album3and1, aUrl2: album3and2, aUrl3: album3and3, aUrl4: album3and4, aUrl5: album3and5, aUrl6: album3and6, aUrl7: album3and7}
                ]},
            {id: 4, text: "Lovely Cats", imgUrl: viewImage4, album: [
                    {headerText: "Lovely Cats", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album4and1, aUrl2: album4and2, aUrl3: album4and3, aUrl4: album4and4, aUrl5: album4and5, aUrl6: album4and6, aUrl7: album4and7}
                ]},
            {id: 5, text: "Beautiful Cottages", imgUrl: viewImage5, album: [
                    {headerText: "Beautiful Cottages", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album5and1, aUrl2: album5and2, aUrl3: album5and3, aUrl4: album5and4, aUrl5: album5and5, aUrl6: album5and6, aUrl7: album5and7}
                ]},
            {id: 6, text: "Surreal Shots", imgUrl: viewImage6, album: [
                    {headerText: "Surreal Shots", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album6and1, aUrl2: album6and2, aUrl3: album6and3, aUrl4: album6and4, aUrl5: album6and5, aUrl6: album6and6, aUrl7: album6and7}
                ]},
            {id: 7, text: "Road Head", imgUrl: viewImage7, album: [
                    {headerText: "Road Head", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album7and1, aUrl2: album7and2, aUrl3: album7and3, aUrl4: album7and4, aUrl5: album7and5, aUrl6: album7and6, aUrl7: album7and7}
                ]},
            {id: 8, text: "Enchanting Green", imgUrl: viewImage8, album: [
                    {headerText: "Enchanting Green", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album8and1, aUrl2: album8and2, aUrl3: album8and3, aUrl4: album8and4, aUrl5: album8and5, aUrl6: album8and6, aUrl7: album8and7}
                ]},
            {id: 9, text: "Charismatic Doors", imgUrl: viewImage9, album: [
                    {headerText: "Charismatic Doors", pText: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                    aUrl1: album9and1, aUrl2: album9and2, aUrl3: album9and3, aUrl4: album9and4, aUrl5: album9and5, aUrl6: album9and6, aUrl7: album9and7}
                ]},
        ]
    })

    //const [closeM, setCloseM] = useState(false);

    function closeModal() {
        setData({ ...data, activeObject: null })
    }



    function toggleActive(index) {
        console.log(index, "**************************")
        setData({ ...data, activeObject: data.object[index] })
    }
    
    function toggleActiveStyles(index) {
        if (data.object[index] === data.activeObject) {
            return "modal active";
        } else{
            return "modal hidden";
        }
    }

    return (

         <section className="gallerySection">
            <div className="grid grid-cols-3 w-full">
                {data.object.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className={toggleActiveStyles(index)}>
                                <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer fixed top-2 right-2" onClick={closeModal} />
                                <div className="modal_body w-full flex flex-col items-center text-center">
                                    <h2 className="text-white text-2xl font-extrabold mb-5">{item.album[0].headerText}</h2>
                                    <p className="text-white text-xl mb-5">
                                        {item.album[0].pText}
                                    </p>
                                    <img className="mb-10" src={item.album[0].aUrl1} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl2} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl3} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl4} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl5} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl6} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={item.album[0].aUrl7} alt="oops sorry something wrong"/>
                                </div>
                            </div>
                            <div className="image-card w-full">
                                <div className="image-card_overview cursor-pointer" onClick={() => toggleActive(index)}>
                                    <img className="w-full" src={item.imgUrl} alt="oops sorry something wrong"/>
                                    <h1 className="text-white text-3xl font-bold">{item.text}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

    );
};

export default GallerySection;