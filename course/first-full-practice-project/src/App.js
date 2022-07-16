import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(1);

  const createUserHandler = (username, age) => {
    setUsers(previousUsers => {
      return [
        ...previousUsers,
        {id: userId, username: username, age: age}
      ]
    })
    setUserId(userId + 1);
  };

  return (
    <div>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
    </div>
  );
}

export default App;

