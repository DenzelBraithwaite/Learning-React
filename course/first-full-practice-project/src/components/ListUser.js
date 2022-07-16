import Card from '../UI/Card'
import cssClasses from './ListUser.module.css';

const ListUser = props => {
    const classes = `${cssClasses.user} ${props.className}`

    return (
        <Card className={classes}>
            <ul>
                {props.users.map(user => {
                    return <li key={user.id}>{`User: ${user.username} (${user.age} years old)`}</li>
                })}
            </ul>
        </Card>
    )
};

export default ListUser;