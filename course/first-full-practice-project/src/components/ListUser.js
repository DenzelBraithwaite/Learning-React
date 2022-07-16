import Card from '../UI/Card'
import cssClasses from './ListUser.module.css';

const ListUser = props => {
    const classes = `${cssClasses.user} ${props.className}`

    return (
        <Card className={classes}>
            <ul>
                {props.users.map(user => {
                    return <li>{`Username: ${user.username}, Age: ${user.age}`}</li>
                })}
            </ul>
        </Card>
    )
};

export default ListUser;