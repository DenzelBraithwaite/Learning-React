import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from './Button';
import Modal from '../UI/Modal';
import cssClasses from '../UI/Card.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    // const [modalTitle, setModalTitle] = useState("Something went wrong.");
    // const [modalMessage, setModalMessage] = useState('Please try again later');
    const [modalInfo, setModalInfo] = useState({title: 'Something went wrong', message: 'please try again'})

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            ModalHandler({
                title: "Input fields cannot be left blank.",
                message: "Please enter a valid username and age."
            });
            return;
        }

        if (+enteredAge < 18) {
            ModalHandler({
                title: "You must be 18 or over to add a user.",
                message: "Please enter a valid age."
            });
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

    const ModalHandler = (modalInfo) => {
        setModalInfo({title: modalInfo.title, message: modalInfo.message})
        setIsValid(false);
    };

    const closeModalHandler = () => {
        setIsValid(true);
    };

    return(
        <div>
           {!isValid && <Modal onCloseModal={closeModalHandler} title={modalInfo.title} message={modalInfo.message} />}
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