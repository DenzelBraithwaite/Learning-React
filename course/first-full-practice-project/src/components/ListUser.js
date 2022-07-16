import cssClasses from './ListUser.module.css';

const ListUser = props => {
    const classes = `${cssClasses.user} ${props.className}`

    return (
        <div className={classes}>
            <div>{props.username}</div>
            <div>{props.age}</div>
        </div>
    )
};

export default ListUser;