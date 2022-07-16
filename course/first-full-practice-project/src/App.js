import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

const App = () => {
  const [users, setUsers] = useState([{id: 1, username: 'FirstUserTest', age: 99}]);
  const [userId, setUserId] = useState(2);

  const createUserHandler = (username, age) => {
    setUsers([
      ...users,
      {id: setUserId(userId + 1), username: username, age: age}
    ])
  };

  return (
    <div>
      <AddUser onCreateUser={createUserHandler}></AddUser>
      <ListUser users={users}/>
    </div>
  );
}

export default App;
