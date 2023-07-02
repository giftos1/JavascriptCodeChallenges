/*This function converts a string to spinal case.
* Spinal case is all-lowercase-words-joined-by-dashes*/

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(/([A-Z])([A-Z])/g, '$1 $2');
    return str.split(/[\s+|_]/g).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));


// /[(?=[A-Z])]/ // checks if string is followed by an uppercase letter