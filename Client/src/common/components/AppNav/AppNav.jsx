import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiFillHome, AiOutlineBell, AiFillWechat } from 'react-icons/ai';

import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'stream-chat-react';
import { NotificationDropdown } from 'react-activity-feed';

import Logo from '../../../images/logo.png';
import './AppNav.scss';

const cookies = new Cookies();

const AppNav = () => {
  const navigate = useNavigate();
  const image = cookies.get('avatarUrl');
  const name = cookies.get('name');
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('email');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    navigate('/home');
  };
  return (
    <nav className="app-nav">
      <div className="app-nav__container">
        <div className="app-nav__container__logo">
          <img src={Logo} alt="campusmate logo" />
          <h2>CampusMate</h2>
        </div>
        <div className="app-nav__container__links">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && '#217bf4' })}
                to="/app/feed"
              >
                <AiFillHome title="Feed" style={{ fontSize: '2rem' }} />
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && '#217bf4' })}
                to="/app/chat"
              >
                <AiFillWechat title="Chat" style={{ fontSize: '2rem' }} />
              </NavLink>
            </li>
            <li>
              <div title="Notifications" className="notification-dropdown">
                <NotificationDropdown
                  notify
                  Icon={() => (
                    <AiOutlineBell className="notification-dropdown__icon" />
                  )}
                />
              </div>
            </li>
            <li>
              <NavLink title="Profile" to="/app/profile">
                <Avatar image={image} name={name} size={32} />
              </NavLink>
            </li>
            <li>
              <div title="Logout">
                <FiLogOut style={{ fontSize: '2rem' }} onClick={logout} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
