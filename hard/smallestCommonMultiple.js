/*Find the smallest common multiple of the provided parameters that can be evenly divided by both,
and by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all
numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
    let numbers = [];
    let largerNum = Math.max(...arr);
    let smallerNum = Math.min(...arr);

    for ( let i = smallerNum; i < largerNum + 1; i++) {
        numbers.push(i);
    }

    while (true){
        let lcm = numbers.every(number => largerNum % number === 0);
        if (lcm){
            return largerNum;
        }
        largerNum++;
    }
}

// Tests
console.log(smallestCommons([1,5]));
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));