// Assignment 2: Operators, Expressions and Input Handling

let bill = Number(prompt("Enter bill amount:", "100"));
let tipPercentage = Number(prompt("Enter tip percentage:", "15"));

let tip = bill * tipPercentage / 100;
let total = bill;
total += tip;

console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);