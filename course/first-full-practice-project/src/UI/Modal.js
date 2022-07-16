import Card from './Card';
import Button from '../components/Button';
import cssClasses from './Modal.module.css';

const Modal = props => {

    return(
        <div>
            <div className={cssClasses.backdrop} />
            <Card className={cssClasses.modal}>
                <header className={cssClasses.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={cssClasses.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={cssClasses.actions}>
                    <Button onClick={props.onCloseModal}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
};

export default Modal;