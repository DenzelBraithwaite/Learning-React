import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

const App = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const createUserHandler = (username, age) => {
    setUsername(username);
    setAge(age);
  };

  return (
    <div>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser username={username} age={age}></ListUser>
    </div>
  );
}

export default App;
