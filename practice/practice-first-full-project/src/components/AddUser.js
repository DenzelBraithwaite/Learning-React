import React, { useState } from 'react';

import Card from './UI/Card';
import Button from './UI/Button';
import cssClasses from './AddUser.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [userId, setUserId] = useState(1);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 18) {
            return;
        }

        props.onAddUser({id: userId, username: enteredUsername, age: enteredAge});
        setUserId(prevId => prevId + 1);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameHandler = event => {
        console.log(event.target.value);
        setEnteredUsername(event.target.value);
    };

    const ageHandler = event => {
        console.log(event.target.value);
        setEnteredAge(event.target.value);
    };

    return (
        <Card>
            <form onSubmit={addUserHandler} className={cssClasses.input} >
                <label htmlFor="username">Username</label>
                <input onChange={usernameHandler} value={enteredUsername} id="username" type="text"></input>
                <label htmlFor="age">Age (in years)</label>
                <input onChange={ageHandler} value={enteredAge} id="age" type="number"></input>
                <Button type="submit">Click me</Button>
            </form>
        </Card>
    )
};

export default AddUser;