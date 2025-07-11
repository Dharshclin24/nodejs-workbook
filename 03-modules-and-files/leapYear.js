/* 
YOUR TASK: 
Create a program that checks to see if the current year is a leap year.
Use the Moment module: https://www.npmjs.com/package/moment and read its documentation to find out how to determine whether a year is a leap year.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says whether the inputted year is a leap year, such as...
    - "2024 is a leap year!"
    - "1979 is not a leap year!"
*/

import moment from "moment";

moment().isLeapYear();
//global variable created input the user's gathered info(years of birth) and place the vale in the array in the place of 2
let userInput = Number(process.argv[2]);

//information gathered from the web address provided to use to determine if the year is
moment([2001]).isLeapYear(); // false
moment([2100]).isLeapYear(); // false
//variable declared to determine if the year is leap with the moment function
let leapYear = moment([year]).isLeapYear(); // true
//console.log(leapYear);
//console.log(userInput);
//if/else statement created to show what to render if the year is leap or not
if (leapYear === true) {
  console.log(`${userInput} is a leap year!`);
} else {
  console.log(`${userInput} is not a leap year!`);
}
