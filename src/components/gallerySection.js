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
import album1 from "../assets/images/albume1/tg1-1.jpg"
import album2 from "../assets/images/albume1/tg1-2.jpg"
import album3 from "../assets/images/albume1/tg1-3.jpg"
import album4 from "../assets/images/albume1/tg1-4.jpg"
import album5 from "../assets/images/albume1/tg1-5.jpg"
import album6 from "../assets/images/albume1/tg1-6.jpg"
import album7 from "../assets/images/albume1/tg1-7.jpg"
import album8 from "../assets/images/albume1/tg1-8.jpg"

// album 2
import album2and1 from "../assets/images/albume2/tg2-1.jpg"
import album2and2 from "../assets/images/albume2/tg2-2.jpg"
import album2and3 from "../assets/images/albume2/tg2-3.jpg"
import album2and4 from "../assets/images/albume2/tg2-4.jpg"
import album2and5 from "../assets/images/albume2/tg2-5.jpg"
import album2and6 from "../assets/images/albume2/tg2-6.jpg"
import album2and7 from "../assets/images/albume2/tg2-7.jpg"
import album2and8 from "../assets/images/albume2/tg2-8.jpg"
import album2and9 from "../assets/images/albume2/tg2-9.jpg"


const GallerySection = () => {
    let data = [
        {id: 1, text: "Lovely couples", imgUrl: viewImage1},
        {id: 2, text: "Winter Wonderland", imgUrl: viewImage2},
        {id: 3, text: "Coffee Time", imgUrl: viewImage3},
        {id: 4, text: "Lovely Cats", imgUrl: viewImage4},
        {id: 5, text: "Beautiful Cottages", imgUrl: viewImage5},
        {id: 6, text: "Surreal Shots", imgUrl: viewImage6},
        {id: 7, text: "Road Head", imgUrl: viewImage7},
        {id: 8, text: "Enchanting Green", imgUrl: viewImage8},
        {id: 9, text: "Charismatic Doors", imgUrl: viewImage9},
    ]

    const [clicked, setClicked] = useState(false);
    // const [getImgId, setGetImgId] = useState('');

    const onClickModalHandler = () => {
        setClicked(!clicked);
    }



    return (
        <section className="gallerySection">

            <div className="grid grid-cols-3 w-full">
                {data.map((item, index) => {
                    return(
                        <div className="image-card w-full" key={index}>
                            <div className="image-card_overview cursor-pointer" onClick={onClickModalHandler}>
                                <img className="w-full" src={item.imgUrl} alt="oops sorry something wrong"/>
                                <h1 className="text-white text-3xl font-bold">{item.text}</h1>
                            </div>

                            <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>
                                <div className="w-full flex items-center justify-end">
                                    <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />
                                </div>
                                <div className="image-card_modal_body w-full flex flex-col items-center">
                                    <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>
                                    <p className="text-white text-xl mb-5">
                                        Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.
                                    </p>
                                    <img className="mb-10" src={album1} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album2} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album3} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album4} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album5} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album6} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album7} alt="oops sorry something wrong"/>
                                    <img className="mb-10" src={album8} alt="oops sorry something wrong"/>
                                </div>
                            </div>
                        </div>

                    )
                })}


                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage2} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Winter Wonderland</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Winter Wonderland</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album2and1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and8} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2and9} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="image-card w-full" onClick={onClickModalHandler}>*/}
                {/*    <div className="image-card_overview cursor-pointer">*/}
                {/*        <img className="w-full" src={viewImage1} alt="oops sorry something wrong"/>*/}
                {/*        <h1 className="text-white text-3xl font-bold">Lovely couples</h1>*/}
                {/*    </div>*/}
                {/*    <div className={clicked ? "image-card_modal active" : "image-card_modal hidden"}>*/}
                {/*        <div className="w-full flex items-center justify-end">*/}
                {/*            <MdClose className="text-white text-5xl mx-3 my-3 cursor-pointer" onClick={onClickModalHandler} />*/}
                {/*        </div>*/}
                {/*        <div className="image-card_modal_body w-full flex flex-col items-center">*/}
                {/*            <h2 className="text-white text-2xl font-extrabold mb-5">Lovely Couples</h2>*/}
                {/*            <p className="text-white text-xl mb-5">*/}
                {/*                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.*/}
                {/*            </p>*/}
                {/*            <img className="mb-10" src={album1} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album2} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album3} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album4} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album5} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album6} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album7} alt="oops sorry something wrong"/>*/}
                {/*            <img className="mb-10" src={album8} alt="oops sorry something wrong"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default GallerySection;