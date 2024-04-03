#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//inquirer
//array
//function
//operators
let todos = ["Nouman", "Hammad", "Ahtisham", "Arshman", "Amir"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            // console.log(todos);        
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
            // console.log(todos);    
        }
        if (ans.select == "View") {
            console.log(chalk.yellow.bold.italic("**** To Do List ****"));
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
            console.log(chalk.red("**************************"));
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
            // console.log(todos); 
        }
        if (ans.select == "Exit") {
            console.log(chalk.red.bold.italic("Exit..."));
            process.exit(0);
        }
    } while (true);
}
createTodo(todos);
