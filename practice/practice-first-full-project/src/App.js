import React from 'react';

import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

function App() {
  const usersList = [];

  return (
    <div>
      <AddUser />
      <ListUser />
    </div>
  )
};

export default App;
