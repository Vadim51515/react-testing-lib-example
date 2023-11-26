import {
    act,
    render,
    screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Router test', () => {
    test('Тест перехода на страницы', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const mainLink = screen.getByTestId('mainLink')
        const aboutLink = screen.getByTestId('aboutLink')
        act(() => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('aboutPage')).toBeInTheDocument()
        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('mainPage')).toBeInTheDocument()
    })

    test('Переход на несуществующую страницу', () => {
        render(
            <MemoryRouter initialEntries={['/sedfsdffdsd']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId('errorPage')).toBeInTheDocument()
    })
})