import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Users from '../users/Users';
import User from '../pages/User';
import ErrorPage from '../pages/ErrorPage';
import HelloWorld from '../pages/HelloWorld';
import UsersForTest from '../components/usersForTest/UsersForTest';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/hello' element={<HelloWorld />} />
            <Route path='/users-test' element={<UsersForTest />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;