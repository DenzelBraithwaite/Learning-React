import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "./Button";
import Modal from "../UI/Modal";
import Wrapper from "./helpers/Wrapper";
import cssClasses from "../UI/Card.module.css";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [modalError, setModalError] = useState(null);

    const addUserHandler = event => {
        event.preventDefault();
        const currentEnteredName = nameInputRef.current.value;
        const currentEnteredAge = ageInputRef.current.value;

        if (
            currentEnteredName.trim().length === 0 ||
            currentEnteredAge.trim().length === 0
        ) {
            ModalHandler({
                title: "Input fields cannot be left blank.",
                message: "Please enter a valid username and age.",
            });
            return;
        }

        if (+currentEnteredAge < 18) {
            ModalHandler({
                title: "You must be 18 or over to add a user.",
                message: "Please enter a valid age.",
            });
            return;
        }

        // setEnteredUsername("");
        // setEnteredAge("");
        props.onCreateUser(currentEnteredName, currentEnteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    // const usernameChangeHandler = event => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = event => {
    //     setEnteredAge(event.target.value);
    // };

    const ModalHandler = errorInfo => {
        setModalError({ title: errorInfo.title, message: errorInfo.message });
    };

    const errorModalHandler = () => {
        setModalError(null);
    };

    return (
        <Wrapper>
            {modalError && (
                <Modal
                    onCloseModal={errorModalHandler}
                    title={modalError.title}
                    message={modalError.message}
                />
            )}
            <Card className={cssClasses.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // onChange={usernameChangeHandler}
                        // value={currentEnteredName}
                        ref={nameInputRef}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // onChange={ageChangeHandler}
                        // value={currentEnteredAge}
                        ref={ageInputRef}
                    ></input>
                    <Button onConfirm={addUserHandler} type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
