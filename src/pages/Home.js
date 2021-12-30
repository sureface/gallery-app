import React from 'react';
// import GallerySection from "../components/gallerySection";
import Header from "../components/header";
import Footer from "../components/footer";
import TestGallery from "../components/testGallery";
// import InfoSection from "../components/infoSection";

const Home = () => {
    return (
        <div>
            <Header />
            {/*<InfoSection />*/}
            <TestGallery />
            <Footer />
        </div>
    );
};

export default Home;