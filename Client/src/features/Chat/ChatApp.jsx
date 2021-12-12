import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer } from './components';
import 'stream-chat-react/dist/css/index.css';
import './ChatApp.scss';

const cookies = new Cookies();
const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get('userId'),
      token: cookies.get('token'),
      fullname: cookies.get('name'),
      email: cookies.get('email'),
      name: cookies.get('username'),
      hashedPassword: cookies.get('password'),
      phoneNumber: cookies.get('phoneNumber'),
      image: cookies.get('avatarUrl')
    },
    authToken
  );
}

const ChatApp = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
};

export default ChatApp;
