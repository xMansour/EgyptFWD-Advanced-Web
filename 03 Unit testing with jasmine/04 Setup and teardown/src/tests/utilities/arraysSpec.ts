import arrays from '../../utilities/arrays';
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe("Arrays Suite", () => {
    describe("arrays.addArr adds nunmbers to the array", () => {
        it('should add numbers in array and be truthy', () => {
            expect(arrays.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', () => {
            expect(arrays.addArr(numArr)).toBe(19);
        });

    })

    describe("arrays.concatArr should concatinate two arrays", () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    })

    describe("arrays.cut3 should remove the third item", () => {
        it('should contain 3 items except rabbit', () => {
            expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    })

    describe("arrays.lgNum should return largest number", () => {

        it('should have 6 be largest number', () => {
            expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    });
})