import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';

export const App = () => {
  return (
    <Admin
      title="Tayssir Admin"
      authProvider={authProvider}
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
    >
      <Resource name="posts" list={ListGuesser}/>
    </Admin>
  );
};

export default App;
