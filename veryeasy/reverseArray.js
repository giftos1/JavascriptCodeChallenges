const numbers = [1, 2, 3, 4];

function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i > -1; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reverseArray(numbers));