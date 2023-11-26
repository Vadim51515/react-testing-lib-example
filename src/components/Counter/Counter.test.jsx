import { act } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter component', () => {
    test('Увеличение и уменьшение count', () => {
        const { getByTestId } = renderTestApp(null);

        const incrementBtn = getByTestId('countIncrement');
        const decrementBtn = getByTestId('countDecrement');
        const countValue = getByTestId('countValue');

        expect(countValue).toHaveTextContent(0);
        act(() => {userEvent.click(incrementBtn);});
        expect(countValue).toHaveTextContent(1);
        act(() => {userEvent.click(decrementBtn);});
        expect(countValue).toHaveTextContent(0);
    });

});