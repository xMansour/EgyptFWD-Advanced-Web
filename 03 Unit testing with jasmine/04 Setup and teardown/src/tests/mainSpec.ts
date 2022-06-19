import newArr from '../main';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe("Main spec", () => {

    describe("newArr should add a number to start of array", () => {
        it('should make a new array containing dog', () => {
            expect(newArr(3, wordArr)).toContain('dog');
        });
        it('make a new array containing 3', () => {
            expect(newArr(3, wordArr)).toContain(3);
        });
    })
});

