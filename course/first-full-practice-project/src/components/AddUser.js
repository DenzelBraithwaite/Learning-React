import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from './Button';
import Modal from '../UI/Modal';
import cssClasses from '../UI/Card.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge <= 0) {
            return;
        }
        
        setEnteredUsername('');
        setEnteredAge('');
        props.onCreateUser(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    return(
        <div>
            <Modal title="Something went wrong" content="Please try again in a few minutes" />
            <Card className={cssClasses.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                    <Button onClick={addUserHandler} type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;