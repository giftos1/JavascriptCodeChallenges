// This function splits a string sentence by characters listed in a list of regex
function splitify(str) {
    return str.split(/[-,. ]/);
}

console.log(splitify("Hello World,I-am code"));