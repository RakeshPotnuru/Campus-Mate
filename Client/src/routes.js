import { Navigate } from 'react-router';

import ChatPage from './app/Chat/ChatPage';
import FeedPage from './app/Feed/FeedPage';
import Auth from './pages/Auth/Auth';
import Home from './pages/LandingPage/Home';
import NotFound from './pages/404/NotFound';
import Profile from './app/Profile/Profile';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <Navigate to="/app/feed" /> : <Navigate to="/login" />
  },
  {
    path: '/app/feed',
    element: isLoggedIn ? <FeedPage /> : <Navigate to="/login" />
  },
  {
    path: '/app/chat',
    element: isLoggedIn ? <ChatPage /> : <Navigate to="/login" />
  },
  {
    path: '/app/profile',
    element: isLoggedIn ? <Profile /> : <Navigate to="/login" />
  },
  {
    path: '/home',
    element: !isLoggedIn ? <Home /> : <Navigate to="/app/feed" />
  },
  {
    path: '/login',
    element: !isLoggedIn ? <Auth /> : <Navigate to="/app/feed" />
  },
  {
    path: '/signup',
    element: !isLoggedIn ? <Auth isSignup /> : <Navigate to="/app/feed" />
  },
  {
    path: '/',
    element: isLoggedIn ? <Navigate to="/app/feed" /> : <Navigate to="/home" />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
