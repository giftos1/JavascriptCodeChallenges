// The join method is used to join the elements of an array together to create a string.
// It takes an argument for the delimiter that is used to separate the array elements in the string.
// The join method inside the sentensify function makes a sentence from the words in the string str.
// The function should return a string

function sentensify(str) {
    let strList = str.split(/[-.,]/);
    return strList.join(" ");

}


console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));