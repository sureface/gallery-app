import React from 'react';
import "../styles/footer.scss";

const Footer = () => {
    return (
        <section className="py-10 footer-section">
            <div className="container mx-auto">
                <div className="footer-section_wrapper px-3 lg:px-0">
                    <h3 className="text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-medium">&copy; «Олег Селиванов», 2021 - 2022</h3>
                    <a href="tel:+998909546343" className="text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-semibold uppercase">+998 (90) 9546343</a>
                </div>
            </div>
        </section>
    );
};

export default Footer;