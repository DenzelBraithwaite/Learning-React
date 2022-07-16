import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';

const App = () => {
  const [users, setUsers] = useState([{id: 1, username: 'FirstUserTest', age: 99}]);
  const [userId, setUserId] = useState(2);

  const createUserHandler = (username, age) => {
    console.log(`newUserId => ${userId}`)
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
    </div>
  );
}

export default App;
