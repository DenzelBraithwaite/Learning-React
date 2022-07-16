import cssClasses from './Button.module.css';

const Button = props => {
    const classes = `${cssClasses.button} ${props.className}`;

    return <button className={classes} type="submit">Add user</button>
};

export default Button;