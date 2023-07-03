/*The function takes two or more arrays and returns a new array of unique values in the order of the original
provided arrays.
all values present from all arrays should be included in their original order, but with no duplicates in the final array
Note: The unique numbers should be sorted by their original order, but the final array should not be sorted in
numerical order*/

function uniteUnique(...arr) {
    const numbers = arr.flat();
    const uniqueArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueArr.includes(numbers[i])) {
            uniqueArr.push(numbers[i])
        }
    }
    return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
