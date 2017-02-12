import { OrderByPipe } from '../../src/pipe/order-by.pipe';
describe('OrderByPipe Tests', function () {
    var pipe;
    beforeEach(function () {
        pipe = new OrderByPipe();
    });
    it('Should order an array', function () {
        var value = ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon'];
        var result = pipe.transform(value);
        expect(result).toEqual(['Apple', 'Banana', 'Lemon', 'Mango', 'Orange']);
    });
    it('Should order an array in reverse', function () {
        var value = ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon'];
        var result = pipe.transform(value, '', true);
        expect(result).toEqual(['Apple', 'Banana', 'Lemon', 'Mango', 'Orange'].reverse());
    });
    it('Should order an array of objects with the predicate', function () {
        var value = [
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Orange',
                order: 10
            },
            {
                name: 'Lemon',
                order: 11
            }
        ];
        var result = pipe.transform(value, 'name', false);
        expect(result).toEqual([
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Lemon',
                order: 11
            },
            {
                name: 'Orange',
                order: 10
            }
        ]);
        var result2 = pipe.transform(value, 'order', true);
        expect(result2).toEqual([
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Lemon',
                order: 11
            },
            {
                name: 'Orange',
                order: 10
            }
        ]);
    });
});
