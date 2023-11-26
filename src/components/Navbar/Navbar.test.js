import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';
import {
    act,
    screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {

    test('Переход на aboutPage', () => {
        renderWithRouter(<Navbar />)

        const aboutLink = screen.getByTestId('aboutLink')

        act(() => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('aboutPage')).toBeInTheDocument()
    })

    test('Переход на usersPage', () => {
        renderWithRouter(<Navbar />)

        const usersLink = screen.getByTestId('usersLink')

        act(() => {
            userEvent.click(usersLink)
        })
        expect(screen.getByTestId('usersPage')).toBeInTheDocument()
    })

    test('Переход на mainPage', () => {
        renderWithRouter(<Navbar />)

        const mainLink = screen.getByTestId('mainLink')
        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('mainPage')).toBeInTheDocument()
    })

})