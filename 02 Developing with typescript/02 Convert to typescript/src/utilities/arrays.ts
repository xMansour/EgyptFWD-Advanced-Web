// Concatenate two arrays

const concatArr = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]): number => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

const lgNum = (arr: (number | string)[]): number | string => {
  let largest = 0 as number;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x as number;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: (number | string)[]): (number | string)[] => {
  arr.splice(2, 1);
  return arr;
};

export { concatArr, addArr, lgNum, cut3 };
