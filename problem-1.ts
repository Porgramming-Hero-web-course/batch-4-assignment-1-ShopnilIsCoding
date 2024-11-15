const sumArray = (arr: number[]): number => {
    return arr.reduce((sum, num) => sum + num, 0);
};

// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
