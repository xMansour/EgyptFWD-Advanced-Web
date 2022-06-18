const util1 = require('./utils/arrayUtils1.js');
const { lgNum, cut3 } = require('./utils/arrayUtils2.js');

let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(util1.sum(arr));
console.log(util1.concat(arr, arr2));

console.log(lgNum(arr));
console.log(cut3(arr));