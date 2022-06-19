"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
const strings_1 = __importDefault(require("../utilities/strings"));
it("expect arrays.addArr([1,2,3,4,5]) to equal 15", () => {
    (expect(arrays_1.default.addArr([1, 2, 3, 4, 5]))).toEqual(15);
});
it("expect arrays.addArr([1,2,3,4,5]) to be greater than 10", () => {
    (expect(arrays_1.default.addArr([1, 2, 3, 4, 5]))).toBeGreaterThan(15);
});
it("expect arrays.concatArr([1,2,3,4,5], [1,2,3,4,5] to contain 5", () => {
    (expect(arrays_1.default.concatArr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))).toContain(5);
});
it("expect arrays.cut3([1,2,3,4,5]) to be truthy", () => {
    (expect(arrays_1.default.cut3([1, 2, 3, 4, 5]))).toBeTruthy();
});
it("expect arrays.cut3([1,2,3,4,5]) to be falsy", () => {
    (expect(arrays_1.default.cut3([1, 2, 3, 4, 5]))).toBeFalsy();
});
it("expect strings.capitalize(\"test\") to be varialbe ", () => {
    const str = "TEST";
    (expect(strings_1.default.capitalize("Test"))).toBe(str);
});
it("expect strings.capitalize(\"test\") to be equal to varialbe ", () => {
    const str = "TEST";
    (expect(strings_1.default.capitalize("Test"))).toEqual(str);
});
