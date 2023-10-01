// A pandigital number contains all digits (0-9) at least once. This function that takes an integer,
// returning true if the integer is pandigital, and false otherwise.
const digit = 1002233456789;
const num2 = 23045505899;
const num3 = 234;

function isPandigital(num) {
    
    const digits = num.toString().split("");
    const numSet = new Set(digits); // Set items cannot be repeated
    return numSet.size === 10;

}

//tests
console.log(isPandigital(digit));
console.log(isPandigital(num2));
console.log(isPandigital(num3));

