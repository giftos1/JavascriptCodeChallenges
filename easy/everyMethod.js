// This function uses every Method to check that every element in an array is positive(>= 0)

function checkPositive(arr) {
    let positiveNumber = (number) => number >= 0;
    return arr.every(positiveNumber);

}

console.log(checkPositive([1, 2, 3, -4, 5]));