// The function fills in a urlSlug function so it converts a string title and returns the hyphenated version for the URL.
// Requirements:
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

function urlSlug(title) {
    let splitString = title.trim().split(/\s+/g);
    return splitString.join("-").toLowerCase();

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));