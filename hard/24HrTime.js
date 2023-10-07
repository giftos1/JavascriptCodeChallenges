// The function receives the time in 12-hour AM/PM format and returns a 24hr string representation of the time
// in military (24-hour) format.

const time1 = "07:05:45PM";
const time2 = "12:40:22AM";
const time3 = "12:45:54PM";

function convertTime(timeStr) {
    if(timeStr.slice(-2) === "AM") {
        if (timeStr.slice(0, 2) === "12") {
            timeStr = timeStr.replace(/12/g, "00");
        }
    } else if (timeStr.slice(-2) === "PM") {
        if (timeStr.slice(0, 2) < "12") {
            let timeRegex = new RegExp(`${timeStr.slice(0, 2)}`, 'g')
            timeStr = timeStr.replace(timeRegex, Number(timeStr.slice(0, 2)) + 12);
        }
    }

    timeStr = timeStr.replace(/AM/g, "");
    timeStr = timeStr.replace(/PM/g, "");

    return timeStr;
}

// tests
console.log(convertTime(time1));
console.log(convertTime(time2));
console.log(convertTime(time3));
