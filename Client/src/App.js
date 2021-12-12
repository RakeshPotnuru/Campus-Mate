import React from 'react';
import { useRoutes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import routes from './routes';

const cookies = new Cookies();
const authToken = cookies.get('token');

function App() {
  const isLoggedIn = authToken !== undefined;
  const routing = useRoutes(routes(isLoggedIn));

  return <React.Fragment>{routing}</React.Fragment>;
}

export default App;
