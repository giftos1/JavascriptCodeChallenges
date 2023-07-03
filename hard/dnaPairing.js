/*The function matches the missing base pairs for the provided DNA strand. It then returns the results as a 2d array.*/
/*Note: Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG,
which form building blocks of the DNA double helix.*/
function pairElement(str) {
    let basePairs = [];
    let matchbasePairs = (function (char) {
        if(char === "A") {
            return ["A", "T"];
        } else if(char ==="T") {
            return ["T", "A"];
        } else if(char ==="C") {
            return ["C", "G"];
        } else if(char === "G") {
            return ["G", "C"]
        }
    })
    for(let i = 0; i < str.length; i++) {
        basePairs.push(matchbasePairs(str[i]));
    }
    return basePairs;
}


console.log(pairElement("GCG"));