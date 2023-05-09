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
                                <h3 className="appie-title">Frequently Asked Questions</h3>
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
                                                <h4>How does it work?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Rond operates by receiving notifications
                                                        from the system whenever you leave a
                                                        location you've stayed at for a period of
                                                        time. This notification includes details
                                                        about the coordinates and duration of your
                                                        visit.
                                                    </p>
                                                    <p>
                                                        Rond then records this information and
                                                        associates it with the places you've already
                                                        marked in the app. If you haven't marked any
                                                        places yet, Rond will create a new one for
                                                        you and prompt you to mark your activity.
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
                                                <h4>Does it consume a lot of battery?</h4>
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
                                                        Rond is designed to use the most
                                                        energy-efficient strategy possible for iOS
                                                        location services. The app does not run in
                                                        the background, and only processes data when
                                                        necessary, similar to the location-based
                                                        reminders in the "Reminders" app.
                                                    </p>
                                                    <p>
                                                        Unlike navigation or footprint tracking apps
                                                        that run continuously and use a lot of
                                                        battery power, Rond does not need to run in
                                                        the background to function properly. As a
                                                        result, it does not consume a significant
                                                        amount of battery.
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
                                                    How do you collect and use my location data?
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
                                                        Rond values your privacy and believes that
                                                        your data belongs to you and you alone.
                                                    </p>
                                                    <p>
                                                        Rond uses Core Data, which is supported by
                                                        iOS, as its database to store your
                                                        information. This means that all your data
                                                        is stored only on your device. Even if you
                                                        enable iCloud sync, your data will still be
                                                        stored securely and encrypted on Apple's
                                                        servers, just like other native apps.
                                                    </p>
                                                    <p>
                                                        It's important to note that if you delete
                                                        the Rond app from your device, all your data
                                                        will also be deleted and cannot be
                                                        recovered.
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
                                                        Rond associates each visit with a single
                                                        place and a single activity. With limited
                                                        information, it can't automatically detect
                                                        if you have multiple activities in one
                                                        place.
                                                    </p>
                                                    <p>
                                                        If you have multiple activities in one
                                                        place, you can easily "split" the visit into
                                                        separate activities and label them
                                                        accordingly within Rond.
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
