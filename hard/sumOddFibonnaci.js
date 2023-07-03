/*The function returns the sum of all odd Fibonacci numbers that are less than or equal to num.
* Note: The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the
* sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
* example: sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5*/

function sumFibs(num) {
    let firstFibonnaci = 0;
    let secondFibonnaci = 1;
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        let nextFibonnaciTerm = firstFibonnaci + secondFibonnaci;
        firstFibonnaci = secondFibonnaci;
        secondFibonnaci = nextFibonnaciTerm;
        // console.log(nextFibonnaciTerm)
        if (nextFibonnaciTerm % 2 === 1 && nextFibonnaciTerm <= num) {
            sum += nextFibonnaciTerm
        }
    }
    return sum + 1;
}

console.log(sumFibs(4));
console.log(sumFibs(1));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
