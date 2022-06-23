// all the npm packages that need to require
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// connecting to database
const connection = mysql.createConnection([
    host: 'localhost',
    user: 'root'
    password: ''
    database: 'employee_db'
]);

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
