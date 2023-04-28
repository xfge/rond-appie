import React from 'react';
import featureThumb from '../../assets/images/3_iphone13blue_portrait.png';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';

function FeaturesHomeTwo() {
    return (
        <>
            <section className="appie-features-area-2 pt-90 pb-100" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="appie-section-title appie-section-title-2 text-center">
                                <h3 className="appie-title">Your footprint map. Always ready.</h3>
                                <p>
                                    It's easier than ever to share your excellent journey to your
                                    friends.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-features-boxes">
                                <div className="appie-features-box-item">
                                    <h4 className="title">Customized map</h4>
                                    <p>Create your own map to show how you explore the worlds.</p>
                                </div>
                                <div className="appie-features-box-item item-3">
                                    <h4 className="title">Easy to share</h4>
                                    <p>Share your self-made travel guide to social media.</p>
                                </div>
                                <div className="appie-features-box-item item-2">
                                    <h4 className="title">Notes support</h4>
                                    <p>You can make notes on every amazing visit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-features-thumb wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <img src={featureThumb} width={400} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-shape-1">
                    <img src={shape15} alt="" />
                </div>
                <div className="features-shape-2">
                    <img src={shape14} alt="" />
                </div>
                <div className="features-shape-3">
                    <img src={shape13} alt="" />
                </div>
            </section>
        </>
    );
}

export default FeaturesHomeTwo;
