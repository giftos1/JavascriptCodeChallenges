// Create a function that will return an integer number corresponding to the amount of digits in the given integer num

// This function converts the number to strings to solve the problem
function numOfDigits(num) {
    return Math.abs(num).toString().split('').length;
}

console.log(numOfDigits(1000));

// This function uses regular expressions to count the digits in a given number
function totalDigits(digit) {
    // let numberRegex = new RegExp(/[0-9]/, "g");
    let numberRegex = /[0-9]/g;
    return digit.toString().match(numberRegex).length;
}

console.log(totalDigits(127));