import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "../components/Button";
import cssClasses from "./Modal.module.css";

const Backdrop = props => {
    return <div className={cssClasses.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
    return (
        <Card className={cssClasses.modal}>
            <header className={cssClasses.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={cssClasses.content}>
                <p>{props.message}</p>
            </div>
            <footer className={cssClasses.actions}>
                <Button onConfirm={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onCloseModal} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onCloseModal}
                />,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};

export default Modal;
