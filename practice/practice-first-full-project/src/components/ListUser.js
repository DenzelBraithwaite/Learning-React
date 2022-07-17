import Card from './UI/Card';
import cssClasses from './ListUser.module.css';

const ListUser = props => {
    return(
        <Card className={cssClasses.user}>
            <ul>
                {props.users.map(user => <li key={user.id}>{`${user.username} - ${user.age} years old.`}</li>)}
            </ul>
        </Card>
    )
};

export default ListUser;