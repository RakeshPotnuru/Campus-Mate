import React from 'react';
import { FlatFeed, StreamApp } from 'react-activity-feed';
import Cookies from 'universal-cookie';

import 'react-activity-feed/dist/index.css';
import AppNav from '../../common/components/AppNav/AppNav';
import { PostCard } from './components';
import CreatePost from './components/CreatePost';

const cookies = new Cookies();
const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const appId = process.env.REACT_APP_STREAM_APP_ID;
const authToken = cookies.get('token');

const FeedApp = () => {
  return (
    <React.Fragment>
      <StreamApp apiKey={apiKey} appId={appId} token={authToken}>
        <AppNav />
        <CreatePost />
        <FlatFeed
          options={{ reactions: { recent: true } }}
          feedGroup="timeline"
          notify
          Activity={(props) => <PostCard props={props} />}
        />
      </StreamApp>
    </React.Fragment>
  );
};

export default FeedApp;
