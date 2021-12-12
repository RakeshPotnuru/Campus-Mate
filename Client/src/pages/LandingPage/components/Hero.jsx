import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../../common/components/Navigation/Navigation';
import Button from '../../../common/components/UIElements/Button';

import HeroImg from '../../../images/hero.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <Navigation />
      <div className="hero__content">
        <div className="hero__content__left">
          <div className="hero__content__left__text">
            <p>CampusMate Community</p>
          </div>
          <h1 className="hero__content__left__title">
            One solution, to solve all problems
          </h1>
          <p className="hero__content__left__description">
            Reach out to students from different colleges, collaborate and share
            your opinions.
          </p>
          <div className="hero__content__left__cta">
            <Link to="/signup">
              <Button className="cta-btn">Get Started →</Button>
            </Link>
            <Button className="cta-btn" outline>
              Invite A Friend
            </Button>
          </div>
        </div>
        <div className="hero__content__right">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
