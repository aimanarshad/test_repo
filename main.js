// Single-line comment: Declaring a number variable
var age = 30;
/*
 Multi-line comment:
 Declaring a string variable
 and using template literals
 to include other variables
*/
var fname = "Alice";
var greeting = "Hello, my name is ".concat(fname, " and I am ").concat(age, " years old.");
// Declaring a boolean variable
var isStudent = true;
// Declaring a variable with undefined type
var address;
// Declaring a variable with null type
var phoneNumber = null;
// Printing the greeting message
console.log(greeting);
// Printing the undefined and null variables
console.log("Address: ".concat(address));
console.log("Phone Number: ".concat(phoneNumber));
