import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../common/components/Footer/Footer';

import MobileApp from '../../../images/mobileApp.png';
import './CTA.scss';

const CTA = () => {
  return (
    <div id="cta">
      <div className="cta">
        <div className="cta__details">
          <p className="cta__details__text">Get Our Application</p>
          <h1 className="cta__details__title">You Can Easily Find Our App…!</h1>
          <p>
            Now interact with other students and your classmates on the go. Get
            our app on Google Play Store now.
          </p>
          <Link to="/">
            <div className="cta__details__button"></div>
          </Link>
        </div>
        <div className="cta__image">
          <img src={MobileApp} alt="mobile app" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CTA;
