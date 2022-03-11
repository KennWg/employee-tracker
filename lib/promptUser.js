const inquirer = require('inquirer');
const dbFunctions = require('./dbFunctions')

const addDepartmentPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the department.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter name of the department.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.addDepartment(answer))
};

const addRolePrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of the role.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter title of the role.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Please enter the salary of the role.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter salary of the role.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'department_id',
            message: 'Please enter the department ID of the role.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter department ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.addRole(answer))
};

const addEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the first name of the employee.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter first name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the last name of the employee.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter last name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'role_id',
            message: 'Please enter the role ID of the employee.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter role ID of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmManager',
            message: 'Would you like to enter a manager ID?',
            default: false
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Please enter the manager ID of the employee.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter manager ID of the employee.');
                    return false;
                }
            },
            when: ({confirmManager}) => {
                if(confirmManager){
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.addEmployee(answer))
};

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
                addDepartmentPrompt();
                break;
            case 'Add a role':
                addRolePrompt();
                break;
            case 'Add an employee':
                addEmployeePrompt();
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