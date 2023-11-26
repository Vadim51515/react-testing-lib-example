import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-testid='Navbar'>
            <Link to='/' data-testid='mainLink'>To main page</Link>
            <Link to='/about' data-testid='aboutLink'>To about page</Link>
            <Link to='/users' data-testid='usersLink'>To users</Link>
        </div>
    );
};

export default Navbar;