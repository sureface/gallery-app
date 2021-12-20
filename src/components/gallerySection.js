import React, {useEffect, useState} from 'react';

//styles
import "../styles/gallerySection.scss";

//overview images
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

// modal
import Modal from "../pages/modal";

// Masonry css
import Masonry from 'react-masonry-css'

const GallerySection = () => {

    // Data
    const [data, setData] = useState({
        activeObject: null,
        object: [
            {
                id: 1,
                title: "Lovely couples",
                imgUrl: viewImage1,
                album:
                    {
                        title: "Lovely couples",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album1and1, album1and2, album1and3, album1and4, album1and5, album1and6, album1and7]
                    }
            },
            {
                id: 2,
                title: "Winter Wonderland",
                imgUrl: viewImage2,
                album:
                    {
                        title: "Winter Wonderland",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album2and1, album2and2, album2and3, album2and4, album2and5, album2and6, album2and7]
                    }
            },
            {
                id: 3,
                title: "Coffee Time",
                imgUrl: viewImage3,
                album:
                    {
                        title: "Coffee Time",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album3and1, album3and2, album3and3, album3and4, album3and5, album3and6, album3and7]
                    }
            },
            {
                id: 4,
                title: "Lovely Cats",
                imgUrl: viewImage4,
                album:
                    {
                        title: "Lovely Cats",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album4and1, album4and2, album4and3, album4and4, album4and5, album4and6, album4and7]
                    }
            },
            {
                id: 5,
                title: "Beautiful Cottages",
                imgUrl: viewImage5,
                album:
                    {
                        title: "Beautiful Cottages",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album5and1, album5and2, album5and3, album5and4, album5and5, album5and6, album5and7]
                    }
            },
            {
                id: 6,
                title: "Surreal Shots",
                imgUrl: viewImage6,
                album:
                    {
                        title: "Surreal Shots",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album6and1, album6and2, album6and3, album6and4, album6and5, album6and6, album6and7]
                    }
            },
            {
                id: 7,
                title: "Road Head",
                imgUrl: viewImage7,
                album:
                    {
                        title: "Road Head",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album7and1, album7and2, album7and3, album7and4, album7and5, album7and6, album7and7]
                    }
            },
            {
                id: 8,
                title: "Enchanting Green",
                imgUrl: viewImage8,
                album:
                    {
                        title: "Enchanting Green",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album8and1, album8and2, album8and3, album8and4, album8and5, album8and6, album8and7]
                    }
            },
            {
                id: 9,
                title: "Charismatic Doors",
                imgUrl: viewImage9,
                album:
                    {
                        title: "Charismatic Doors",
                        subtitle: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
                        images: [album9and1, album9and2, album9and3, album9and4, album9and5, album9and6, album9and7]
                    }
            },
        ]
    });

    //remove btn
    const [removeBtn, setRemoveBtn] = useState(false);

    // check click state
    const [clicked, setClicked] = useState(false);

    // limit state
    const [limit, setLimit] = useState(6);

    // set limit
    const sliceObj = data.object.slice(0, limit);

    // load more btn
    const loadMore = () => {
        setLimit(limit + 3);
    };

    // closeModal function
    function closeModal() {
        setData({...data, activeObject: null});
        setClicked(false);
    }

    //  clicked album
    function toggleActive(index) {
        console.log(index,  "---------------------------------------------------")
        console.log(data, "data//////////");
        console.log(data.activeObject, "************acctiv");

        setData({...data, activeObject: data.object[index]});
        setClicked(true);
    }

    const breakpointColumnsObj = {
        default: 2,
        550: 1
    };

    useEffect(() => {
        if (data.object.length <= limit){
            setRemoveBtn(true);
        }
    }, [limit]);

    return (
        <section className="gallerySection">
            {clicked ? <Modal data={data.activeObject} closeModal={closeModal}/> : ""}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {sliceObj.map((item, index) => (
                        <div className="image-card_overview" key={index} onClick={() => toggleActive(index)}>
                            <img className="w-full" src={item.imgUrl} alt="oops sorry something wrong"/>
                            <h1 className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-5xl font-bold">{item.title}</h1>
                        </div>
                ))}

            </Masonry>

            {removeBtn ? "" :
            <div className="w-full flex items-center justify-center py-20">
                <button className="text-black border border-black rounded-full px-6 py-2" onClick={loadMore}>show more</button>
            </div>
            }
        </section>

    );
};

export default GallerySection;