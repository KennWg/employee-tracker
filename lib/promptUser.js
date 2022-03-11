const inquirer = require('inquirer');

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
                console.log('View all departments selected');
                break;
            case 'View all roles':
                console.log('View all roles selected');
                break;
            case 'View all employees':
                console.log('View all employees selected');
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
};

module.exports = promptUser;