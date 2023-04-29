import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section className={`appie-faq-area pt-95 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Frequently asked questions</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How it works?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Rond receives the notification from the
                                                        system every time when you leave a place
                                                        where you've stayed for a while. The system
                                                        includes the coordinate and duration about
                                                        this visit event.
                                                    </p>
                                                    <p>
                                                        Rond records the information and links it
                                                        with the places you've marked. If none, a
                                                        new place will be created and you'll be
                                                        notified to mark your activity.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Is it energy consuming?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>No.</p>
                                                    <p>
                                                        Rond adopts the most energy-efficient
                                                        strategy in iOS location services. The app
                                                        will not run in the background, and only
                                                        perform simple data processing when it
                                                        occurs at a specific time (similar to the
                                                        location-based reminders of the "reminders"
                                                        app).
                                                    </p>
                                                    <p>
                                                        You don't need it to be like a map Running
                                                        in the background like a navigation or track
                                                        tracking app will consume battery power
                                                        continuously.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    I am concerned about your collection of my
                                                    location data.
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Rond practices that your data always belongs
                                                        to you.
                                                    </p>
                                                    <p>
                                                        Rond uses Core Data supported by iOS as a
                                                        database. All your data is only stored on
                                                        your device. Even if you enable iCloud sync,
                                                        the data will still be stored encrypted on
                                                        Apple's servers, just like other native
                                                        apps.
                                                    </p>
                                                    <p>
                                                        Rond uses Core Data supported by iOS as a
                                                        database. All your data is only stored on
                                                        your device. Even if you enable iCloud sync,
                                                        the data will still be stored encrypted on
                                                        Apple's servers, just like other native
                                                        apps. We understand your concern, but you
                                                        don't have to.
                                                    </p>
                                                    <p>
                                                        Therefore, you should understand that when
                                                        you delete the app, all data will also be
                                                        deleted and cannot be recovered.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    What if I have more than one activity in one
                                                    place?
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Rond associates a visit with a single place
                                                        and a single activity. In fact, as an app
                                                        that does not run in the background, it
                                                        cannot infer whether you are performing
                                                        multiple activities in one place.
                                                    </p>
                                                    <p>
                                                        You can "split" a single visit and label
                                                        them as separate activities. You can do this
                                                        easily in Rond.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
