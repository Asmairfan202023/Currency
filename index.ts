#! /usr/bin/env node
import inquirer from "inquirer";

const currency:any = {
    USD:1, //base currency
    EUR:0.91,
    GPB:0.76,
    IMR:74.57,
    PKR:280
};
let user_input = await inquirer.prompt(
    [
    {
    name:"from",
    message:"Enter from Currency",
    type:"list",
    choices:["USD","EUR","GPB","IMR","PKR"]

},
{
    name:"to",
    message:"Enter to Currency",
    type:"list",
    choices:["USD","EUR","GPB","IMR","PKR"]

},
{
    name:"amount",
    message: "Enter your amount",
    type: "number"
}
]
)
let fromAmount= currency[user_input.from];   //exchange rate
let toAmount = currency[user_input.to];   //exchange rate
let amount = user_input.amount;
let baseAmount = amount/fromAmount;      //usd base currency
let convertedAmount = baseAmount*toAmount;

console.log(fromAmount);  
console.log(toAmount);
console.log(amount);
console.log(convertedAmount);