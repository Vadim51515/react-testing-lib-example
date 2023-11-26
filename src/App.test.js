import {
    act,
    fireEvent,
    render,
    screen,
} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Тестиреум App', () => {

    test('Провереям основные элементы на странице', () => {
        render(<App />);
        const titleText = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/в меня можно ввести текст/i);

        expect(titleText).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    test('Проверяем, что нет ничего лишнего', () => {
        render(<App />);
        const titleText = screen.queryByText(/hello2/i);
        expect(titleText).toBeNull();
    });

    test('Проверяем, асинхронный вывод имени', async () => {
        render(<App />);
        const nameText = await screen.findByText(/вадим/i);
        expect(nameText).toBeInTheDocument();
    });

    test('Клик по тоглу', () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');

        // Элемента ЕЩЕ нет на странице
        expect(screen.queryByTestId('toggle-elem')).toBeNull();

        fireEvent.click(btn);
        // Элемент с нужным тестом есть на странице
        expect(screen.queryByTestId('toggle-elem')).toHaveTextContent(/Тогл сейчас в положении вкл/i);

        fireEvent.click(btn);
        // Элемента УЖЕ нет на странице
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test('Вввод значения в инпут', () => {
        render(<App />);

        const input = screen.queryByTestId('main-input');
        expect(screen.queryByTestId('value-input')).toContainHTML('');

        const newValue = '123123';
        fireEvent.input(input, {
            target: { value: newValue },
        });
        expect(screen.queryByTestId('value-input')).toContainHTML(newValue);
    });

    test('Вввод значения в инпут с помощью userEvent',  () => {
        render(<App />);

        const input = screen.queryByTestId('main-input');
        expect(screen.queryByTestId('value-input')).toContainHTML('');

        const newValue = '123123';
        act(() => {
             userEvent.type(input, newValue)
        })
        expect(screen.queryByTestId('value-input')).toContainHTML(newValue);
    });

});

