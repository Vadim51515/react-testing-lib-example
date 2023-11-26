import React from 'react';

const User = ({user, onDelete}) => {
    return (
        <div data-testid='userPage'>
            <h4>{user.name}</h4>
            <button onClick={() => onDelete(user.id)} id='userDelete'>Удалить этого пользователя</button>
        </div>
    );
};

export default User;