"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_1 = __importDefault(require("../../utilities/numbers"));
describe("Numbers suite: ", () => {
    describe("numbers.sum should add two numbers", () => {
        it('should be a sum greater than 10', () => {
            expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
        });
        it('should be a sum less than 10', () => {
            expect(numbers_1.default.sum(-3, 10)).toBeLessThan(10);
        });
    });
    describe("numbers.multiply should multiply two numbers", () => {
        it('should multiply 3 by 5 and be 15', () => {
            expect(numbers_1.default.multiply(3, 5)).toBe(15);
        });
        it('should multiply 0 by 5 to be falsy', () => {
            expect(numbers_1.default.multiply(0, 5)).toBeFalsy();
        });
    });
});
