// Create a function that takes a number x and a character y ("m" for male, "f" for female),
// and returns the name of an ancestor (m/f) or descendant (m/f).

    // If the number is negative, return the related ancestor.
    // If positive, return the related descendant.
    // You are generation 0. In the case of 0 (male or female), return "me!".

function generation(genNum, gender) {
    if (genNum === -3) {
        if (gender === "m") {
            return  "great grandfather";
        } else {
            return "great grandmother";
        }
    }

    if (genNum === -2) {
        if (gender === "m") {
            return "grandfather";
        } else {
            return "grandmother";
        }
    }

    if (genNum === -1) {
        if (gender === "m") {
            return "father";
        } else {
            return "mother";
        }
    }

    if (genNum === 0) {
        if (gender === "m" || gender === "f") {
            return "me!";
        }
    }

    if (genNum === 1) {
        if (gender === "m") {
            return "son";
        } else {
            return "daughter";
        }
    }

    if (genNum === 2) {
        if (gender === "m") {
            return "grandson";
        } else {
            return "granddaughter";
        }
    }

    if (genNum === 3) {
        if (gender === "m") {
            return "great grandson";
        } else {
            return "great granddaughter";
        }
    }

}

console.log(generation(-3, "m"))
console.log(generation(-3, "f"))
console.log(generation(-2, "m"))
console.log(generation(-2, "f"))
console.log(generation(-1, "m"))
console.log(generation(-1, "f"))
console.log(generation(0, "m"))
console.log(generation(0, "f"))
console.log(generation(1, "m"))
console.log(generation(1, "f"))
console.log(generation(2, "m"))
console.log(generation(2, "f"))
console.log(generation(3, "m"))
console.log(generation(3, "f"))