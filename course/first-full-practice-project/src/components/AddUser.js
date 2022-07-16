import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from './Button';
import Modal from '../UI/Modal';
import cssClasses from '../UI/Card.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [modalTitle, setModalTitle] = useState("Something went wrong.");
    const [modalMessage, setModalMessage] = useState('Please try again later');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            ModalHandler("Username too short", "Username cannot be left blank");
            return;
        }

        if (+enteredAge <= 0) {
            ModalHandler("Age too low", "Age less than 1");
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

    const ModalHandler = (title, message) => {
        setModalTitle(title)
        setModalMessage(message)
        setIsValid(false);
    };

    const closeModalHandler = (title, message) => {
        setIsValid(true);
    };

    return(
        <div>
           {!isValid && <Modal onCloseModal={closeModalHandler} title={modalTitle} message={modalMessage} />}
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