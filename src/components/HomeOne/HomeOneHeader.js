import React, { useEffect } from 'react';

import logoBlack from '../../assets/images/logo-black.png';
import logoWhite from '../../assets/images/logo-white.png';
import StickyMenu from '../../lib/StickyMenu';

function HomeOneHeader({ darkEnable = false, dark, className }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`appie-header-area ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
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
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">{/* <Navigation /> */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
