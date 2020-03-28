import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

export const App = () => {
  return (
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
};

export default App;
