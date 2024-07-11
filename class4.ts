import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name:"num1",
        type:"number",
        message:"Enter a number to perform operation"
    }
])

let num2 : number = 2;

//finalResult = (sum + difference) * (product / (division + remainder)) ** power

//perform operations;

//               4    +  2
let sum:number = answer.num1 + num2; // 6

//                      4    -  2
let difference:number = answer.num1 - num2; //2

//                    4   *  2
let product:number = answer.num1 * num2; //8

//                    4    /  2
let division:number = answer.num1 / num2; // 2

//                   4    **  2          4 * 4
let power : number = answer.num1 ** num2 ; // 16

let remainder : number =  answer.num1 % num2; // 0

//put values in finalResult

let finalResult:number = (sum + difference) * (product / (division + remainder)) ** power ;
console.log(finalResult);