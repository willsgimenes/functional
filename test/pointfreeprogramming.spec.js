const { pointfreeDouble } = require('../src/pointfreeprogramming');

describe('Point free programming', () => {
    describe('Array methods', () => {
        describe('map function', () => {
            it('should double the value', () => {
                const arr = [1, 2, 3];
                expect(pointfreeDouble(arr)).toEqual([2, 4, 6]);
                expect(pointfreeDouble(arr)).not.toEqual([3, 5, 7])
            })
        })
    })
});
