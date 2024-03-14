import React from 'react';
import thumb from '../../assets/images/screenshot-forest.png';

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <span>Native Design</span>
                            <h3 className="title">Simple but Powerful</h3>
                            <p>
                                Rond is more than just a tracker; it's your personal location
                                journal, allowing you to capture thoughts tied to special places and
                                create enchanting travelogues to share with friends.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Explorer Map</h5>
                                    <p>
                                        Trace your travel footprint on the map and uncover how much
                                        of the world you've explored.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Tags & Notes</h5>
                                    <p>
                                        Preserve precious moments and unlock new dimensions of
                                        stats.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Customizable</h5>
                                    <p>
                                        Pin Widgets on Home Screen to track activity trends over
                                        time.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Enhanced with iOS</h5>
                                    <p>
                                        Connect to Apple Health, Shortcuts, Calendar, and more to
                                        get the most out of the platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="traffic-thumb-only-mobile">
                                    <img
                                        className="wow animated fadeInRight"
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                        src={thumb}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
