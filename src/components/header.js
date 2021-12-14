import React from 'react';
import "../styles/navigation.scss"

import Logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <div className="navigation flex items-center">
            <div className="default-container w-full">
                <div className="flex items-center justify-between">
                    <a href="#"><img src={Logo} alt="oops sorry something wrong"/></a>
                    <ul className="flex items-center">
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">home</a></li>
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">features</a></li>
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">portfolio</a></li>
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">block</a></li>
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">pages</a></li>
                        <li><a href="#" className="uppercase text-sm text-black-200 font-semibold px-5">elements</a></li>
                    </ul>
                </div>
            </div>
     
        </div>
    );
};

export default Header;