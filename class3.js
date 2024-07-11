// Single-line comment: Declaring a number variable
let age = 30;
/*
 Multi-line comment:
 Declaring a string variable
 and using template literals
 to include other variables
*/
let fname = "Alice";
let greeting = `Hello, my name is ${fname} and I am ${age} years old.`;
// Declaring a boolean variable
let isStudent = true;
// Declaring a variable with undefined type
let address;
// Declaring a variable with null type
let phoneNumber = null;
// Printing the greeting message
console.log(greeting);
// Printing the undefined and null variables
console.log(`Address: ${address}`);
console.log(`Phone Number: ${phoneNumber}`);
export {};
