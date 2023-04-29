import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FaqHomeOne from '../HomeOne/FaqHomeOne';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HeroHomeOne from '../HomeOne/HeroHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import TrafficHomeOne from '../HomeOne/TrafficHomeOne';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne';

function HomeDark() {
    const [darkMode, setDarkMode] = useToggle(true);

    return (
        <>
            <HomeOneHeader
                className={darkMode ? 'appie-header-area-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
            />
            <HeroHomeOne className={darkMode ? 'appie-hero-area-dark' : ''} />
            <FeaturesHomeOne className={darkMode ? 'appie-features-area-dark' : ''} />
            <FeaturesHomeTwo className={darkMode ? 'appie-features-area-dark' : ''} />
            {/* <ServicesHomeOne className={darkMode ? 'appie-service-area-dark' : ''} /> */}
            <TrafficHomeOne className={darkMode ? 'appie-traffic-area-dark' : ''} />
            {/* <TestimonialHomeOne /> */}
            {/* <TeamHomeOne className={darkMode ? 'appie-team-area-dark' : ''} /> */}
            {/* <PricingHomeOne className={darkMode ? 'appie-pricing-area-dark' : ''} /> */}
            <FaqHomeOne className={darkMode ? 'appie-faq-area-dark' : ''} />
            {/* <BlogHomeOne className={darkMode ? 'appie-blog-area-dark' : ''} /> */}
            {/* <ProjectHomeOne /> */}
            <FooterHomeOne className={darkMode ? 'appie-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
