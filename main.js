#! /usr/bin/env node
import inquirer from "inquirer";
//inquirer done
//array done
//function done
//operators
let todos = ["safa", "hira"];
async function createTodo() {
    let userAns = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["Add", "Update", "View", "Delete"],
    });
    if (userAns.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo"
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (userAns.select == "Update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
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
        console.log(todos);
    }
    if (userAns.select == "View") {
        console.log("*** TO DO ***");
        console.log(todos);
        console.log("**********************");
    }
    if (userAns.select == "Delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
}
createTodo();
