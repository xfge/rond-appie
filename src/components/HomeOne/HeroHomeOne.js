import React from 'react';
import heroThumbOne from '../../assets/images/1_iphone13blue_portrait.png';
import shapeFour from '../../assets/images/shape/shape-4.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';
import download from '../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Rond</span>
                                <h1 className="appie-title">
                                    Location-Based <br /> Life Story.
                                </h1>
                                <p>
                                    Places you've visited are logged automatically. Rond organizes
                                    your activities in timeline.
                                </p>
                                <div className="apps-download-btn">
                                    <img src={download} alt="Download on the App Store" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroThumbOne} width={400} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
