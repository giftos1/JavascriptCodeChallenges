/*The function moves all the zeroes to the end of an array.
* The function does not return a copy of the original array*/


function zeroesToEnd(arr) {
    let newArr = [...arr];

    function allZero(element) {
        return element === 0;
    }

    if (!arr.includes(0) || arr.every(allZero) ) {
        return arr;
    }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                newArr.splice(newArr.indexOf(arr[i]), 1);
                newArr.push(arr[i]);
            }
        }
    arr = newArr; // copy contents of newArr to original arr
    return arr;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // [1, 2, 4, 5, 0, 0, 0]
console.log(zeroesToEnd([0, 0, 2, 0, 5])); // [2, 5, 0, 0, 0]
console.log(zeroesToEnd([4, 4, 5])); // [4, 4, 5]
console.log(zeroesToEnd([0, 0])); // [0, 0]
