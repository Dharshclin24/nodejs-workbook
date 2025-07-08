/* 
YOUR TASK: 
Create a program that determines the birthstone for a month inputted by the user. 
Your app should read birthstone data from the data.json file.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says the month's birthstone, such as...
    - "The birthstone for January is Garnet."
    - "The birthstone for July is Ruby." 
*/

const fs = require("fs");
//console.log(fs);

//get user input
// we want the user to input a month
const month = process.argv[2];
console.log(month);

function getBirthstone() {
    fs.readFile("./data.json", "utf8", (err, data) => {
        //console.log(data);

        const birthstoneData = JSON.parse(data);
        if(birthstoneData[month]) {
            console.log(`The birthstone for ${month} is ${birthstoneData[month]}.`);
        } else {
            console.log("Invalid month. Please enter a valid month.");
        }
 

      
       

    });
}

getBirthstone();


    