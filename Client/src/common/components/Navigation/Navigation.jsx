import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../images/logo.png';
import Button from '../UIElements/Button';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__container__logo">
          <img src={Logo} alt="campusmate logo" />
          <h2>CampusMate</h2>
        </div>
        <div className="navigation__container__links">
          <ul>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
