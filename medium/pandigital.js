// A pandigital number ia number that contains all values ranging from [0-9]
// The function returns true if number is pandigital and false if it is not

const num1 = 1002344567899;
const num2 = 234;
const num3 = 123456789;

function isPandigital(num) {
    const digits = num.toString().split("");
    const numSet = new Set(digits);
    return numSet.size === 10;
}

//tests
console.log(isPandigital(num1));
console.log(isPandigital(num2));
console.log(isPandigital(num3));