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
                    'View the total utilized budget of a department',
                    'No Action',
                ]
        }
    ])
    .then((answers) => {
        // destructuring choices from answers object of the thenify for inquirer, so that I can run
        // conditionals with call back functions for each option user has made
        const { choices } = answers
        if (choices === "View all departments") {
            viewDepartments();
        }
        if (choices === "View all roles") {
            viewRoles();
        }
        if (choices === "View all employees") {
            viewAllEmployees();
        }
        if (choices === "Add a role") {
            addRole();
        }
        if (choices === "Add an employee") {
            addEmployee();
        }
        if (choices === "Update an employee") {
            updateEmployee();
        }
        if (choices === "Update employee managers") {
            updateManager();
        }
        if (choices === "View employees by manager") {
            employeeManager();
        }
        if (choices === "View employees by department") {
            employeeDepartment();
        }
        if (choices === "Delete a department") {
            deleteDepartment();
        }
        if (choices === "Delete a role") {
            deleteRole();
        }
        if (choices === "Delete an employee") {
            deleteEmployee();
        }   
        if (choices === "View the total utilized budget of a department") {
            totalDepartmentBudget();
        }
        if (choices === "No Action") {
            connection.end()
        };
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });
}

function viewDepartments() {
    const sqlStr = `
    SELECT *
    FROM department`

    connection.query(sqlStr, (err, data) => {
        if(err) throw err;

        console.log('\n')
        console.table(data)
        console.log('\n')

        promptUser()
    })
}

function viewRoles() {
    const sqlStr = `
    SELECT *
    FROM role`

    connection.query(sqlStr, (err, data) => {
        if(err) throw err;

        console.log('\n')
        console.table(data)
        console.log('\n')

        promptUser()
    })
}
