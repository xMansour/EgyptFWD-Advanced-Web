import { concatArr, addArr, lgNum, cut3 } from "./utilities/arrays";
import { multiply, subtract, divide, sum, square } from "./utilities/numbers";
import { concat, capitalize, upperCase, lowerCase } from "./utilities/strings";

const numArr: number[] = [3, 4, 5, 6];
const wordArr: string[] = ["cat", "dog", "rabbit", "bird"];
const arrSum: number = addArr(numArr);
const mixArr: (number | string)[] = concatArr(numArr, wordArr);
const myNum: number = ("15" as unknown as number) % 2;

console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize("the quick brown fox"));
console.log(multiply("5", 8));
console.log(lgNum(mixArr));
