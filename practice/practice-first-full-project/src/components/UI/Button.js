import cssClasses from './Button.module.css';

const Button = props => {
    return <button className={cssClasses.button} type={props.type || 'button'}>{props.children}</button>
};

export default Button;