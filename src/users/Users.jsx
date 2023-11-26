import React, {
    useEffect,
    useState,
} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data)
    }

    useEffect(() => {
        loadUsers()
    }, []);

    return (
        <div  data-testid='usersPage'>
            {users.map((user) => <Link key={user.id} data-testid={'user-item'} to={`/user/${user.id}`}>{user.name}</Link>)}
        </div>
    );
};

export default Users;