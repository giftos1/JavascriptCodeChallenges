/*The function iterates through and removes each element starting from the first element (the 0 index) until the
function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let callBackFunc = func;
    if(!arr.some(element => callBackFunc(element))) { // check if there is any element that returns true to func
        return [];
    }
    if(arr.every(element => callBackFunc(element))){ // check if all elements return true to func
        return arr;
    }
    for(let i = 0; i < arr.length; i++) {
        if(!callBackFunc(...arr)){
            arr.shift();
        }
    }
    return arr;
}

// Tests
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));