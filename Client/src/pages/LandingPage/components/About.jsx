import React from 'react';
import { AiOutlineStar, AiOutlineTrophy } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import AboutImg from '../../../images/about.png';
import GithubRed from '../../../images/githubRed.png';
import Button from '../../../common/components/UIElements/Button';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__container__left">
          <p className="about__container__left__text">What’s CampusMate?</p>
          <h1 className="about__container__left__title">
            Why Join CampusMate Community?
          </h1>
          <p className="about__container__left__description">
            CampusMate Community is a platform that connects you to like-minded
            students across cities, states, countries studying in different
            schools
          </p>
          <div className="about__container__left__list">
            <ul>
              <li>Groups</li>
              <li>Messages</li>
              <li>Feed</li>
            </ul>
          </div>
        </div>
        <div className="about__container__right">
          <img src={AboutImg} alt="about" />
        </div>
      </div>
      <div className="about__container__two">
        <div className="about__container__two__card">
          <div className="about__container__two__card__title">
            <AiOutlineStar className="about__container__two__card__title__icon" />
            <p className="about__container__two__card__title__text">
              4.8 Rating
            </p>
          </div>
          <div className="about__container__two__card__update">
            <span className="about__container__two__card__update__icon">
              &nbsp;
            </span>
            <p className="about__container__two__card__update__text">
              <span>+845</span> Members
            </p>
          </div>
          <div className="about__container__two__card__description">
            <p>
              Forever growing community with the thirst for collaboration and
              getting most out of being in college.
            </p>
          </div>
          <div className="about__container__two__card__button">
            <Link to="/signup">Join Our Community →</Link>
          </div>
        </div>
        <div className="about__container__two__card">
          <div className="about__container__two__card__title">
            <AiOutlineTrophy className="about__container__two__card__title__icon" />
            <p className="about__container__two__card__title__text">
              Challenges
            </p>
          </div>
          <div className="about__container__two__card__update">
            <img src={GithubRed} alt="github" style={{ width: '20%' }} />
            <p className="about__container__two__card__update__text">
              Coming Soon
            </p>
          </div>
          <div className="about__container__two__card__description">
            <p>
              Participate in our weekly and monthly challenges, collaborate and
              win recognition and prizes.
            </p>
          </div>
          <div className="about__container__two__card__button">
            <Link to="/">Go To Challenges →</Link>
          </div>
        </div>
        <div className="about__container__two__details">
          <p className="about__container__two__details__text">
            Our Achievement
          </p>
          <h1 className="about__container__two__details__title">
            We are Connecting You The Digital Life.
          </h1>
          <p className="about__container__two__details__description">
            Why limit yourself to the traditional methods of formal education.
            Why limit your social circle within your college?
          </p>
          <div className="about__container__two__details__button">
            <Link to="/signup">
              <Button>Get Started →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
