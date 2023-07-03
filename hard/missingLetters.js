/*This function finds the missing letter in the passed letter range and returns it.
*If all letters are present in the range, it returns undefined*/

function findMissingLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) > 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}

console.log(findMissingLetter("abce"));
console.log(findMissingLetter("abcdefghjklmno"));
console.log(findMissingLetter("stvwx"));
console.log(findMissingLetter("bcdf"));
console.log(findMissingLetter("abcdefghijklmnopqrstuvwxyz"));