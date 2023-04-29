import React, { useEffect } from 'react';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import PrivacyPolicyPage from './TermsOfUse';
import HomeOneHeader from '../HomeOne/HomeOneHeader';

function Terms() {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <HomeOneHeader className="appie-header-area-dark" dark darkEnable />
            <PrivacyPolicyPage />
            {/* <ProjectHomeOne /> */}
            <FooterHomeOne className="appie-footer-area-dark" />
            <BackToTop />
        </>
    );
}

export default Terms;
