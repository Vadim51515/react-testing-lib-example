import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('По дефолту getCounterValue имеет значение 0', () => {
        expect(getCounterValue()).toBe(0)
    })

    test('Проверяем работу  getCounterValue', () => {
        expect(getCounterValue({
            counter: {
                value:100,
            }
        })).toBe(100)
    })
})