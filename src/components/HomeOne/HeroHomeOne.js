import React from 'react';
import heroThumbOne from '../../assets/images/1_iphone13blue_portrait.png';
import shapeFour from '../../assets/images/shape/shape-4.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';

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
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" /> Download for iOS
                                        </a>
                                    </li>
                                </ul>
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
