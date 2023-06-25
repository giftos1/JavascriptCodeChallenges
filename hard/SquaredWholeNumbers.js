
/*Note: Your function should not use any kind of for or while loops or the forEach() function.
The function uses a combination of filter() and reduce() to return a new array containing the squares of only the
positive integers(decimal numbers are not integers)when an array of real numbers is passed to it
*/


const squareList = arr => {
    let positiveWholeDigits = arr.filter(digit => digit > 0 && Number.isInteger(digit)); // filter positive integers
    // return positiveWholeDigits;
    return positiveWholeDigits.reduce(function (squares, digit) {
        if (positiveWholeDigits.length !== 0) {
            squares.push(digit * digit);
        }
        return squares;
    }, []); // reduce positive array of integers to their squares in a new array
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);