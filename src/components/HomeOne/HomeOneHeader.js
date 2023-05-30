import React, { useEffect } from 'react';

import logoBlack from '../../assets/images/logo-black.png';
import logoWhite from '../../assets/images/logo-white.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HomeOneHeader({ darkEnable = false, dark, className }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`appie-header-area ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="appie-logo-box">
                                {darkEnable && dark ? (
                                    <a href="/">
                                        <img src={logoWhite} alt="" />
                                    </a>
                                ) : (
                                    <a href="/">
                                        <img src={logoBlack} alt="" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-3 order-sm-2">
                            <div className="row justify-content-end appie-header-main-menu-wrapper">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
