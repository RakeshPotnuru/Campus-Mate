import React from 'react';
import AppNav from '../../common/components/AppNav/AppNav';

import ChatApp from '../../features/Chat/ChatApp';

const ChatPage = () => {
  return (
    <React.Fragment>
      <AppNav />
      <ChatApp />
    </React.Fragment>
  );
};

export default ChatPage;
