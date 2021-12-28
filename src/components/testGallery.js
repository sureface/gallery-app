import React, {useEffect, useState} from 'react';

import "../styles/gallerySection.scss";

import axios from "axios";
import Masonry from "react-masonry-css";
import Modal from "../pages/modal";

const TestGallery = () => {

    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(false);
    const [limit, setLimit] = useState(10);

    const [data, setData] = useState({
        selected: null,
        album: []
    });

    // fetching data from api +++ &limit=${limit}
    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(`${process.env["REACT_APP_API"]}/api/collections/get/album?token=73ad18f6896b8a47f97bfe3f824958`);
        const resData = await response.data.entries;

        data.album = resData

        setLoading(false);
    }

    // run this function when page updated
    useEffect(() => {
        fetchData();
    }, [] );

    function loadMore() {
        setLimit((prev) => prev + 10);
    }

    // selected data
    function selectedAlbum(index) {
        setData({...data, selected: data.album[index]});
        setSelected(true);
    }

    // loading till data coming
    if (loading) {
        return (
            <div className="fancy-wrapper">
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>

            </div>
        )
    }

    // closeModal function
    function closeModal() {
        setData({...data, activeObject: null});
        setSelected(false);
    }



    // break point of column images
    const breakpointColumnsObj = {
        default: 2,
        550: 1
    };

    return (
        <section className="gallerySection">

            {selected ? <Modal data={data.selected} closeModal={closeModal}/> : ""}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {data.album.slice(0, limit).map((item, index) => (
                    <div className="image-card_overview" key={index} onClick={() => selectedAlbum(index)}>
                        <img className="w-full" src={process.env["REACT_APP_API"] + "/" + item.Thumbnail.path}
                             alt="oops sorry something wrong"/>
                        <h1 className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-5xl font-bold">{item.Heading}</h1>
                    </div>
                ))}

            </Masonry>

            {limit < data.album.length &&
            <div className="w-full flex items-center justify-center py-20">
                <button className="text-black border border-black rounded-full px-6 py-2"
                        onClick={() => loadMore()}>show more
                </button>
            </div>
            }

        </section>
    );
};

export default TestGallery;