import inquirer from "inquirer";
let myBalance = 5000000;
let myPinCode = 2345;
let pinAns = await inquirer.prompt([
    {
        name: "userEnteredPin",
        type: "number",
        message: "Enter you pin : ",
    },
]);
if (pinAns.userEnteredPin === myPinCode) {
    console.log("You entered correct pin code ");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What operation you want to perform : ",
            choices: ["withdraw", "checkbalance"],
        },
    ]);
    if (operations.operation === "withdraw") {
        let withdrawalAmount = await inquirer.prompt([
            {
                name: "amountEntered",
                type: "list",
                message: "Enter your desired amount : ",
                choices: [10000, 20000, 30000],
            },
        ]);
        if (myBalance >= withdrawalAmount.amountEntered) {
            myBalance -= withdrawalAmount.amountEntered;
            console.log(`You have withdraw ${withdrawalAmount.amountEntered}$ amount and your remaining balance is ${myBalance}$`);
        }
        else {
            console.log("Insufficient Balance !");
        }
    }
    else if (operations.operation === "checkbalance") {
        console.log(`Your total Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin code!");
}
