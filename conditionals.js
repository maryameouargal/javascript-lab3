// conditionals.js

console.log("Lab conditions JavaScript - démarrage OK");

// Programme 1 — Are You Old Enough ?
var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

// Programme 2 — Days of the Week
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("Read a book");
    break;
  case "Tuesday":
    console.log("Watch a movie");
    break;
  case "Wednesday":
    console.log("Go for a walk");
    break;
  case "Thursday":
    console.log("Practice coding");
    break;
  case "Friday":
    console.log("Meet friends");
    break;
  case "Saturday":
    console.log("Play a game");
    break;
  case "Sunday":
    console.log("Rest and plan the week");
    break;
  default:
    console.log("There is no such day");
}