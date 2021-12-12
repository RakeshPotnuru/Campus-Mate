import React from 'react';
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin
} from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';

import Logo from '../../../images/logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>CampusMate Inc.</p>
        <div className="footer__logo">
          <img src={Logo} alt="CampusMate Logo" />
          <h4>CampusMate</h4>
        </div>
        <div className="footer__links">
          <AiFillTwitterCircle className="footer-icon" />
          <AiOutlineInstagram className="footer-icon" />
          <SiFacebook className="footer-icon" />
          <AiFillLinkedin className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
