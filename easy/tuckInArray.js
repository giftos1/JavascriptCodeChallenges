// This function takes two arrays and inserts the second array in the middle of the first array

let couples = ["Joy", "Gift", "Ogingo", "Sydo"];
let notCouples = ["Shiro", "Shonko"];

function tuckIn(array1, array2) {
    let middleOfArray = (array1.length / 2);
    // return array1.slice().concat(array2).split(",");
    return array1.slice(0, middleOfArray).concat(array2).concat(array1.slice(middleOfArray));
}

console.log(tuckIn(couples, notCouples));