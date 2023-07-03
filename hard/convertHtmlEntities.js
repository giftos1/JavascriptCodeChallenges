/*The function converts the characters  &, <, >, " (double quote), and ' (apostrophe), in a string to their
corresponding HTML entities. */

function convertHTML(str) {
    const strArr = str.split("");
    const specialChar = ["&", "<", ">", "\'", "\""];
    for (let char of specialChar){
        if (strArr.indexOf(char) > -1){
            if (char === "&"){
                str = str.replace(/&/g, "&amp;");
            } else if(char === "<") {
                str = str.replace(/</g, "&lt;");
            } else if(char === ">") {
                str = str.replace(/>/g, "&gt;")
            } else if(char === "\"") {
                str = str.replace(/"/g, "&quot;")
            } else {
                str = str.replace(/'/g, "&apos;")
            }
        }
    }
    return str;
}

// Tests
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
console.log(convertHTML("<>&\"\'"));