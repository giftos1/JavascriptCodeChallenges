// this function takes an integer n and returns the nth tetrahedral number

function tetra(n) {
    return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));