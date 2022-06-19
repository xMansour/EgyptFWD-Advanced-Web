"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../main"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe("Main spec", () => {
    describe("newArr should add a number to start of array", () => {
        it('should make a new array containing dog', () => {
            expect((0, main_1.default)(3, wordArr)).toContain('dog');
        });
        it('make a new array containing 3', () => {
            expect((0, main_1.default)(3, wordArr)).toContain(3);
        });
    });
});
