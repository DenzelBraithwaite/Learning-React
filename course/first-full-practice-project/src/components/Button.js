import cssClasses from "./Button.module.css";

const Button = props => {
    const classes = `${cssClasses.button} ${props.className}`;

    return (
        <button
            className={classes}
            type={props.type || "button"}
            onClick={props.onConfirm}
        >
            {props.children}
        </button>
    );
};

export default Button;
