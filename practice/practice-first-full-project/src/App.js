import React, { useState } from 'react';

import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = userInfo => {
    setUserList(prevValues => {
      return [...prevValues, userInfo];
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <ListUser users={userList}/>
    </div>
  )
};

export default App;
