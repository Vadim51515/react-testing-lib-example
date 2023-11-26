import {
    act,
    render,
    screen,
} from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import {
    MemoryRouter,
    Route,
    Routes,
} from 'react-router-dom';
import User from '../pages/User';
import React from 'react';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('Users', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    'id': 1,
                    'name': 'Leanne Graham',
                },
                {
                    'id': 2,
                    'name': 'Ervin Howell',
                },
                {
                    'id': 3,
                    'name': 'Clementine Bauch',
                },
            ],
        };
    });

    test('Метод вызван 1 раз и выводит 3 пользователей', async () => {
        axios.get.mockReturnValue(response);
       renderWithRouter(null, '/users')
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });

    test('Переход на страницу конкретного пользователя', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, '/users')
        const users = await screen.findAllByTestId('user-item');
        act(() => {
            userEvent.click(users[0]);
        });
        expect(screen.getByTestId('userPage')).toBeInTheDocument();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});