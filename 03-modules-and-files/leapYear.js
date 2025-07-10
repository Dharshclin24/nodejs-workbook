import moment from "moment";


// * 
// YOUR TASK: 
// Create a program that checks to see if the current year is a leap year.
// Use the Moment module: https://www.npmjs.com/package/moment and read its documentation to find out how to determine whether a year is a leap year.

// REQUIREMENTS:
// - Your program should accept 1 user input: a year (such as “2025”)
// - Your program should output a console.log() message that says whether the inputted year is a leap year, such as...
//     - "2024 is a leap year!"
//     - "1979 is not a leap year!"
// */
const trueLYear = moment([2000]).isLeapYear() // true
const falseLYear = moment([2001]).isLeapYear() // false
console.log(trueLYear);
console.log(falseLYear);
const userInputedYear = process.argv[2];
console.log(userInputedYear);







      
       

    






// YOUR TASK: 
// Create a program that checks to see if the current year is a leap year.
// Use the Moment module: https://www.npmjs.com/package/moment and read its documentation to find out how to determine whether a year is a leap year.

// REQUIREMENTS:
// - Your program should accept 1 user input: a year (such as "January")
// - Your program should output a console.log() message that says whether the inputted year is a leap year, such as...
//     - "2024 is a leap year!"
//     - "1979 is not a leap year!"

