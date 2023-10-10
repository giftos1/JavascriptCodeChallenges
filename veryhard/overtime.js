/*
This function calculates overtime and pay associated with overtime.

Working 9 to 5: regular hours
After 5pm is overtime
Your function gets an array with 4 values:

Start of working day, in decimal format, (24-hour day notation)
End of working day. (Same format)
Hourly rate
Overtime multiplier
Your function should spit out:

$ + earned that day (rounded to the nearest hundreth)
*/

/*
Examples

overTime([9, 17, 30, 1.5]) ➞ "$240.00"

overTime([16, 18, 30, 1.8]) ➞ "$84.00"

overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
2nd example explained:

From 16 to 17 is regular, so 1 * 30 = 30
From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
30 + 54 = $84.00
*/

function overTime(arr) {
    let startTime = arr[0];
    let endTime = arr[1];
    let hourlyRate = arr[2];
    let overtimeMultiplier = arr[3];
    let normalEndTime = 17;
    let normalHours = normalEndTime - startTime;
    let overTimeHours = endTime - normalEndTime;
    let hoursWorked = endTime - startTime;
    let totalPay;

    // started before 5pm and ended past 5pm
    if (endTime > normalEndTime && startTime <= 17) {
        let overtimePay = overTimeHours * hourlyRate * overtimeMultiplier;
        totalPay = (normalHours * hourlyRate) + overtimePay;
    }
    // only worked past 5pm
    else if (startTime > 17) {
        totalPay = (endTime - startTime) * hourlyRate * overtimeMultiplier;
    }
    // only worked before 5pm
    else {
        totalPay =  hoursWorked * hourlyRate;
    }

    // round off to the nearest hundredth(for older browsers - IE8 and above)
    return '$' + (Math.round(totalPay * 100) / 100).toFixed(2);

}

console.log(overTime([9, 17, 30, 1.5])); // $240.00
console.log(overTime([16, 18, 30, 1.8])); // $84.00
console.log(overTime([13.25, 15, 30, 1.5])); // $52.50
console.log(overTime([18, 20, 32.5, 2])); // $130.00
console.log(overTime([13, 20, 32.5, 2])); // $325.00