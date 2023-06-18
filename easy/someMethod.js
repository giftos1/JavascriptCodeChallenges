//  The function checks if there are any numbers in an array that are positive
function checkPositive(arr) {
    // Only change code below this line
    let positiveNumber = (number) => number >= 0;
    return arr.some(positiveNumber);

    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));