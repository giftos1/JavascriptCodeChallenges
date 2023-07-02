/*The function returns strings based on the following conditions:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word,
and add ay to it.
- If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
    let vowelRegex = /^[AEIOU]|^[aeiou]/g;
    let notVowel = /^[^aeiou]+|^[^AEIOU]+/g;
    if(str.charAt(0).match(vowelRegex)) {
        return str + "way";
    }
    else if(str.charAt(0).match(notVowel)){
        return str.replace(notVowel, "") + str.match(notVowel).toString() + "ay";
    }
    else {
        return str + "ay";
    }

}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
