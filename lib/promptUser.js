const inquirer = require('inquirer');
const dbFunctions = require('./dbFunctions')

const promptUser = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'menuOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then(answer => {
        switch(answer.menuOptions) {
            case 'View all departments':
                dbFunctions.viewDepartments();
                break;
            case 'View all roles':
                dbFunctions.viewRoles();
                break;
            case 'View all employees':
                dbFunctions.viewEmployees();
                break;
            case 'Add a department':
                console.log('Add department selected');
                break;
            case 'Add a role':
                console.log('Add a role selected');
                break;
            case 'Add an employee':
                console.log('Add an employee selected');
                break;
            case 'Update an employee role':
                console.log('Update an employee role selected');
                break;
            default:
                console.log('Invalid option');
                break;
        }
    })
    .catch(error => console.log(error));
};

module.exports = promptUser;