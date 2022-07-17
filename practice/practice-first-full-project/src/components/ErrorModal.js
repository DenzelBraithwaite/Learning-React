import Button from './UI/Button';
import Card from './UI/Card';
import cssClasses from './ErrorModal.module.css';

const ErrorModal = props => {
    return(
        <div>
            <div className={cssClasses.backdrop} onClick={props.onCloseModal}>
            <Card className={cssClasses.modal}>
                <header className={cssClasses.header}>
                    <h2>{props.error.title}</h2>
                </header>
                <div className={cssClasses.content}>
                    <p>{props.error.message}</p>
                </div>
                <footer className={cssClasses.actions}>
                    <Button onClick={props.onCloseModal}>Okay</Button>
                </footer>
            </Card>
            </div>
        </div>
    )
};

export default ErrorModal;