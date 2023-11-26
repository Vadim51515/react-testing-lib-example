import React, {
    useEffect,
    useState,
} from 'react';
import User from '../../pages/User';

const UsersForTest = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json)
                    setIsLoading(false)
                }, 1000)
            })
    }, []);

    const onDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id='usersLoading'>Идет загрузка...</h1>}
            {users.length && (
                <div id='usersList'>
                    {users.map((user) => (
                        <User onDelete={onDelete} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersForTest;