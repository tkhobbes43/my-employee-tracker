// all the npm packages that need to require
require('dotenv').config()
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


// connecting to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});

// function that shows welcome image after connection
afterConnection = () => {
    console.log(",-------------------------------------------------.")
    console.log("|                                                 |")
    console.log("|                  My Employee                    |")
    console.log("|                    Tracker                      |")
    console.log("|                                                 |")
    console.log("`-------------------------------------------------'")
    promptUser();
};

// inquirer prompt for what user wants to do
const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee',
                    'Update employee managers',
                    'View employees by manager',
                    'View employees by department',
                    'Delete a department',
                    'Delete a role',
                    'Delete an employee',
                    'View the total utilized budget of a department']
        }
    ])
    .then((answers) => {

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });
}