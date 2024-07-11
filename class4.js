import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter a number to perform operation"
    }
]);
let num2 = 2;
//finalResult = (sum + difference) * (product / (division + remainder)) ** power
//perform operations;
//               4    +  2
let sum = answer.num1 + num2; // 6
//                      4    -  2
let difference = answer.num1 - num2; //2
//                    4   *  2
let product = answer.num1 * num2; //8
//                    4    /  2
let division = answer.num1 / num2; // 2
//                   4    **  2          4 * 4
let power = answer.num1 ** num2; // 16
let remainder = answer.num1 % num2; // 0
//put values in finalResult
let finalResult = (sum + difference) * (product / (division + remainder)) ** power;
console.log(finalResult);
