/*This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples:
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.
*/
// Each movement is an integer

function trackRobot(...steps) {
    let coordinates = [...steps];

    // return default coordinates if robot doesnt move
    if (coordinates.every((index) => index === 0) || coordinates.length === -1) {
        return [0, 0];
    }

    // individual steps directions
    let norths = [];
    let easts = [];
    let souths = [];
    let wests = [];

    // push step direction to respective directions array
    for (let i = 0; i < coordinates.length; i+=4) {
        norths.push(coordinates[i]);
        easts.push(coordinates[i+1]);
        souths.push(coordinates[i+2]);
        wests.push(coordinates[i+3]);
    }

    // remove any undefined elements in array
    function removeUndefinedElements(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (typeof arr[i] === 'undefined') {
                arr.splice(i, 1);
            }
        }
    }
    removeUndefinedElements(norths);
    removeUndefinedElements(easts);
    removeUndefinedElements(souths);
    removeUndefinedElements(wests);

    // sums of individual step directions
    let northSum = norths.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);
    let eastSum = easts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);
    let southSum = souths.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);
    let westSum = wests.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    coordinates = [eastSum - westSum, northSum - southSum];

    return  coordinates;
}

// tests
console.log(trackRobot(0, 0)); // [0, 0]
console.log(trackRobot(20)); // [0, 20]
console.log(trackRobot(20, 30)); // [30, 20]
console.log(trackRobot(-10, 20, 10)); // [20. -20]
console.log(trackRobot(20, 30, 10)); // [30, 10]
console.log(trackRobot(20, 30, 10, 40)); // [-10, 10]
console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [6, 5]
console.log(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0)); // [0, 3]
console.log(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5)); // [3, 0]




