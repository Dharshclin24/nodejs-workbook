/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this folder.
Running node index.js Maisie 3 should output: "Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!"
Year 1 of a dog's life is 15 dog years
Year 2 is the equivalent of another 9 years.
Every year after that is the equivalent of another 5 years.



Similarly, running node index.js Ralph 4 should output, "Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!"



Run this file with the node command:
node dogAgeCalculator.js

*/

let dogName = (process.argv[2]);
let dogYears = Number(process.argv[3])(humanAge);
let humanAge = Number(process.arg[4]);

function calculateDogYears(dogYears) {
    if (isNaN(dogYears) || dogYears <= 0) 

      if (humanAge === 1) {
        dogYears = 15;
    } else if (humanAge === 2) {
        dogYears = 15 + 9; 
    } else if (humanAge > 2) {
        dogYears = 15 + 9 + (humanAge 
            + 1) * 5;
    } else {
        
        dogYears;
    }
    return calculateDogYears;
}










console.log(`${dogName} is ${humanAge} human years old, which is ${dogYears} in dog years.`);