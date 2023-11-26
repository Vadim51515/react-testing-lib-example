import counterReducer, {
    decrement,
    increment,
} from './counterReducer';

describe('counterReducer', () => {
    test('Увеличение count', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value:1})
    })

    test('Уменьшение count', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value:-1})
    })

    test('state пустой', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value:-1})
        expect(counterReducer(undefined, increment())).toEqual({value:1})
    })

})