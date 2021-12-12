import React from 'react';
import { Avatar } from 'stream-chat-react';
import { StatusUpdateForm } from 'react-activity-feed';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './CreatePost.scss';

const cookies = new Cookies();
const userId = cookies.get('userId');
const token = cookies.get('token');
const name = cookies.get('name');
const avatar = cookies.get('avatarUrl');

const CreatePost = () => {
  const handleActivity = async (activity) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/feed/postActivity`, {
      activity,
      userId,
      token,
      name,
      avatar
    });
  };
  return (
    <div className="create-post">
      <div className="create-post__input">
        <StatusUpdateForm
          Header={
            <div className="create-post__header">
              <Avatar
                image={'https://picsum.photos/200/300'}
                size={52}
                name={'Rakesh'}
              />
              <h3>New Post</h3>
            </div>
          }
          onSuccess={(activity) => handleActivity(activity)}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default CreatePost;
