import cssClasses from './Card.module.css';

const Card = props => {
    const classes = `${cssClasses.card} ${props.className}`

    return <div className={classes}>{props.children}</div>
};

export default Card;