"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
describe("toEqual and toBe difference", () => {
    it("expect myFunc(5) to equal 25", () => {
        (expect((0, main_1.myFunc)(5))).toEqual(25);
    });
    it("expect arr1 equal arr2", () => {
        (expect(main_1.arr1)).toEqual(main_1.arr2);
    });
    it("expect arr1 toBe arr2", () => {
        (expect(main_1.arr1)).toBe(main_1.arr2);
    });
});
