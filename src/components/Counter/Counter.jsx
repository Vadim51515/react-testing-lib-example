import React from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { getCounterValue } from '../../store/selectors/getCounterValue/getCounterValue';
import {
    decrement,
    increment,
} from '../../store/reducers/counterReducer';

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid={'countValue'}>Count: {value}</h1>
            <button data-testid={'countIncrement'} onClick={onIncrement}>Прибавить</button>
            <button data-testid={'countDecrement'} onClick={onDecrement}>Убавить</button>
        </div>
    );
};

export default Counter;