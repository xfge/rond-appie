// import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import DownloadHomeThree from '../HomeThree/DownloadHomeThree';
import ServicesHomeThree from '../HomeThree/ServicesHomeThree';
import ShowCaseHomeThree from '../HomeThree/ShowCaseHomeThree';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo';
import Drawer from '../Mobile/Drawer';
import FooterHomeFive from './FooterHomeFive';
import HeaderHomeFive from './HeaderHomeFive';
import HeroHomeFive from './HeroHomeFive';

function HomeFive() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeFive action={drawerAction.toggle} />
            <HeroHomeFive />
            <ServicesHomeThree />
            <FeaturesHomeTwo />
            <DownloadHomeThree className="pb-90" />
            <ShowCaseHomeThree />
            <TestimonialHomeOne />
            <SponserHomeTwo className="pt-90" />
            <FooterHomeFive />
            <BackToTop className="back-to-top-5" />
        </>
    );
}

export default HomeFive;
