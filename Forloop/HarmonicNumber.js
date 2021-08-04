const readline = require("readline-sync");
let num = readline.questionInt("Enter a Number: ");
let harmonicnumber = 0;
for (n = 0; n < num; n++) {
    harmonicnumber = harmonicnumber + (1 / n);
}
console.log("Harmonic Number : " + harmonicnumber);