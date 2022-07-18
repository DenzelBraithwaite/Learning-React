import React, { useState } from 'react';

import Card from './UI/Card';
import Button from './UI/Button';
import cssClasses from './AddUser.module.css';
import ErrorModal from './ErrorModal';


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [userId, setUserId] = useState(1);
    const [errorMessage, setErrorMessage] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage({title: 'Username and age cannot be left blank.', message: 'Please enter a valid username and age and try again.'});
            return;
        }

        if (+enteredAge < 18) {
            setErrorMessage({title: 'Must be 18 or over to add a user', message: 'Please enter a valid age and try again.'});
            return;
        }

        props.onAddUser({id: userId, username: enteredUsername, age: enteredAge});
        setUserId(prevId => prevId + 1);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageHandler = event => {
        setEnteredAge(event.target.value);
    };

    const modalCloseHandler = () => {
        setErrorMessage(null);
    };

    return (
        <Card className={cssClasses.input}>
            {errorMessage && <ErrorModal onCloseModal={modalCloseHandler} error={errorMessage}/>}
            <form onSubmit={addUserHandler} className={cssClasses.input} >
                <label htmlFor="username">Username</label>
                <input onChange={usernameHandler} value={enteredUsername} id="username" type="text" />
                <label htmlFor="age">Age (in years)</label>
                <input onChange={ageHandler} value={enteredAge} id="age" type="number" />
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
};

export default AddUser;