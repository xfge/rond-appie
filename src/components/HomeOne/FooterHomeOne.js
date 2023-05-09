import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import download from '../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} width={200} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">App</h4>
                                <ul>
                                    <li>
                                        <Link to="/">Features</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Roadmap</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <Link to="/privacy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms">Terms of Use</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6"> */}
                        {/*    <div className="footer-widget-info"> */}
                        {/*        <h4 className="title">Get In Touch</h4> */}
                        {/*        <ul> */}
                        {/*            <li> */}
                        {/*                <a href="#"> */}
                        {/*                    <i className="fal fa-envelope" /> demo@apple.com */}
                        {/*                </a> */}
                        {/*            </li> */}
                        {/*        </ul> */}
                        {/*    </div> */}
                        {/* </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <a
                                        href="https://apps.apple.com/app/id1669903815"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={download} alt="Download on the App Store" />
                                    </a>
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2023 Rond. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
