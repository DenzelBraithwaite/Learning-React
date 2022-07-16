import Card from './Card';
import Button from '../components/Button';
import cssClasses from './Modal.module.css';

const Modal = props => {

    return(
        <Card className={cssClasses.modal}>
            <header className={cssClasses.header}>{props.title}</header>
            <div className={cssClasses.content}>{props.message}</div>
            <footer>
                <Button className={cssClasses.actions}>Okay</Button>
            </footer>
        </Card>
    )
};

export default Modal;