const inquirer = require('inquirer');
const dbFunctions = require('./dbFunctions')

//View employee by manager
const viewEmployeesByManagerPrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'manager_id',
            message: 'Please enter the manager ID of the employees you wish to view.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter manager ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.viewEmployeesByManager(answer))
};

//View employee by department
const viewEmployeesByDepartmentPrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'department_id',
            message: 'Please enter the department ID of the employees you wish to view.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter department ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.viewEmployeesByDepartment(answer))
};

//Add department
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

//Add role
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

//Add employee
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

//Update employee role
const updateEmployeeRolePrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the id of the employee you wish to update.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'role_id',
            message: 'Please enter the new role id of the employee',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter role ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.updateEmployeeRole(answer))
};

//Update employee manager
const updateEmployeeManagerPrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the id of the employee you wish to update.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Please enter the new manager id of the employee',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter manager ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.updateEmployeeManager(answer))
};

//Delete department
const deleteDepartmentPrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the ID of the department you wish to delete.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter manager ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.deleteDepartment(answer))
};

//Delete role
const deleteRolePrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the ID of the role you wish to delete.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter role ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.deleteRole(answer))
};

//Delete employee
const deleteEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the ID of the employee you wish to delete.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter employee ID.');
                    return false;
                }
            }
        }
    ]).then(answer => dbFunctions.deleteEmployee(answer))
};

const promptUser = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'menuOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'View employees by manager', 'View employees by department', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Update an employee manager', 'Delete a department', 'Delete a role', 'Delete an employee']
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
            case 'View employees by manager':
                viewEmployeesByManagerPrompt();
                break;
            case 'View employees by department':
                viewEmployeesByDepartmentPrompt();
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
                updateEmployeeRolePrompt();
                break;
            case 'Update an employee manager':
                updateEmployeeManagerPrompt();
                break;
            case 'Delete a department':
                deleteDepartmentPrompt();
                break;
            case 'Delete a role':
                deleteRolePrompt();
                break;
            case 'Delete an employee':
                deleteEmployeePrompt();
                break;
            default:
                console.log('Invalid option');
                break;
        }
    })
};

module.exports = promptUser;