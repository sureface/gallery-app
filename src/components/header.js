import React from 'react';
import "../styles/navigation.scss"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="navigation flex items-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-between px-3 lg:px-0">
                    <Link to="/" className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl font-bold uppercase">Олег Селиванов</Link>
                    <a href="tel:+998909546343" className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl font-semibold uppercase">+998 (90) 9546343</a>
                </div>
            </div>
     
        </div>
    );
};

export default Header;