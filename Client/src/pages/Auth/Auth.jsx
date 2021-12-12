import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import axios from 'axios';

import LoginImg from '../../images/loginImg.jpg';
import SignupImg from '../../images/signupImg.jpg';
import Button from '../../common/components/UIElements/Button';
import './Auth.scss';

const cookies = new Cookies();

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  username: '',
  phoneNumber: '',
  avatarUrl: ''
};

const Auth = (props) => {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      username,
      phoneNumber,
      avatarUrl
    } = form;

    const {
      data: { token, userId, hashedPassword, name }
    } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/${
        props.isSignup ? 'signup' : 'login'
      }`,
      {
        email,
        password,
        confirmPassword,
        name: form.name,
        username,
        phoneNumber,
        avatarUrl
      }
    );

    cookies.set('token', token);
    cookies.set('userId', userId);
    cookies.set('name', name);
    cookies.set('email', email);

    if (props.isSignup) {
      await axios.post(`${process.env.REACT_APP_API_URL}/user/addProfile`, {
        name,
        avatarUrl,
        username
      });
      cookies.set('username', username);
      cookies.set('password', hashedPassword);
      cookies.set('phoneNumber', phoneNumber);
      cookies.set('avatarUrl', avatarUrl);
    }

    navigate('/');
  };

  return (
    <div className="auth">
      <div className="auth__img">
        <img
          src={props.isSignup ? SignupImg : LoginImg}
          alt={props.isSignup ? 'signup image' : 'login image'}
        />
      </div>
      <div className="auth__form">
        <h1 className="auth__form__title">
          {props.isSignup ? 'Welcome to CampusMate' : 'Good to see you again!'}
        </h1>
        <form onSubmit={handleSubmit}>
          {props.isSignup && (
            <>
              <div className="auth__form__input">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth__form__input">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Choose a Username"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth__form__input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth__form__input">
                <label htmlFor="avatarUrl">Avatar URL</label>
                <input
                  type="text"
                  name="avatarUrl"
                  id="avatarUrl"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className="auth__form__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth__form__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder={
                props.isSignup ? 'Create Password' : 'Enter your Password'
              }
              onChange={handleChange}
              minLength="8"
              required
            />
            {props.isSignup && <p>Password must be minimum 8 characters</p>}
          </div>
          {props.isSignup && (
            <div className="auth__form__input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-type your password"
                onChange={handleChange}
                minLength="8"
                required
              />
            </div>
          )}
          <Button className="auth-btn" type="submit">
            {props.isSignup ? 'Create Account' : 'Login'}
          </Button>
        </form>

        <p className="auth__form__bottom">
          {props.isSignup
            ? 'Already have an account?'
            : 'Don’t have an account?'}{' '}
          <Link to={props.isSignup ? '/login' : '/signup'}>
            {props.isSignup ? 'Login' : 'Sign Up'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
