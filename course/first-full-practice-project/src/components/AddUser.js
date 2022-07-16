import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from './Button';
import cssClasses from '../UI/Card.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(false);

    const addUserHandler = (event) => {
        setEnteredUsername('');
        setEnteredAge('');
        event.preventDefault();
        props.onCreateUser(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card className={cssClasses.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                <Button onClick={addUserHandler} type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;