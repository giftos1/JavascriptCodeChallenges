/*The function below sorts an array without changing the original array*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let newArr = [...arr];
    return newArr.sort(function(a, b) {
        return a===b ? 0 : a < b ? -1 : 1;
    })
}

nonMutatingSort(globalArray);