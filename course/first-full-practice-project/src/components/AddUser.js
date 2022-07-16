import Card from '../UI/Card';
import Button from './Button';
import cssClasses from '../UI/Card.module.css';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return(
        <Card className={cssClasses.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                <Button></Button>
                {/* <button type="submit">Add a user</button> */}
            </form>
        </Card>
    )
};

export default AddUser;