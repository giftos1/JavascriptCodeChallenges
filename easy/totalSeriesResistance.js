// a function that takes an array of values resistance that are connected in series, and calculates the total resistance
// of the circuit in ohms
// The ohm is the standard unit of electrical resistance in the International System of Units ( SI )

function seriesResistance(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total <= 1) {
        return total + " ohm"
    } else {
        return total + " ohms"
    }
}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([0.5, 0.5]));