import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === 'PASSWORD_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
};

const Login = props => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const context = useContext(AuthContext);

    useEffect(() => {
        console.log('Effect RUNNING');

        return () => {
            console.log('EFFECT CLEAAAAANUP');
        };
    }, []);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = emailState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('checking validity!');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 700);

        return () => {
            clearTimeout(identifier);
            console.log('CLEAN up function was run');
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = event => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

        setFormIsValid(emailState.isValid);
    };

    const passwordChangeHandler = event => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value });

        setFormIsValid(passwordState.isValid);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'PASSWORD_BLUR' });
    };

    const submitHandler = event => {
        event.preventDefault();
        context.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    id="password"
                    label="password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
