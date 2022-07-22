import React, { useState, Fragment } from "react";
import AddUser from "./components/AddUser";
import ListUser from "./components/ListUser";

const App = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(1);

    const createUserHandler = (username, age) => {
        setUsers((previousUsers) => {
            return [
                ...previousUsers,
                { id: userId, username: username, age: age },
            ];
        });
        setUserId(userId + 1);
    };

    return (
        <Fragment>
            <AddUser onCreateUser={createUserHandler}></AddUser>
            <ListUser users={users} />
        </Fragment>
    );
};

export default App;
