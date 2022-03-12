const db = require('../db/connection');
const cTable = require('console.table');

//View all departments
const viewDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.promise().query(sql)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//View all roles
const viewRoles = () => {
    const sql = `SELECT role.id, role.title, role.salary, department.name AS department_name
                FROM role
                LEFT JOIN department
                ON role.department_id = department.id`;

    db.promise().query(sql)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//View all employees
const viewEmployees = () => {
    const sql = `SELECT e1.id AS id, e1.first_name AS first_name, e1.last_name AS last_name, role.title AS job_title, department.name AS department_name, role.salary AS salary, CONCAT(e2.first_name," ",e2.last_name) AS manager
                FROM employee e1
                LEFT JOIN role
                ON e1.role_id = role.id
                LEFT JOIN department
                ON role.department_id = department.id
                LEFT JOIN employee e2
                ON e1.manager_id = e2.id
                `;

    db.promise().query(sql)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//View employees by manager
const viewEmployeesByManager = (answers) => {
    const sql = `SELECT e1.id AS id, e1.first_name AS first_name, e1.last_name AS last_name, role.title AS job_title, department.name AS department_name, role.salary AS salary, CONCAT(e2.first_name," ",e2.last_name) AS manager
                FROM employee e1
                LEFT JOIN role
                ON e1.role_id = role.id
                LEFT JOIN department
                ON role.department_id = department.id
                LEFT JOIN employee e2
                ON e1.manager_id = e2.id
                WHERE e1.manager_id = ?
                `;
    const params = answers.manager_id;

    db.promise().query(sql,params)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//View employees by department
const viewEmployeesByDepartment = (answers) => {
    const sql = `SELECT e1.id AS id, e1.first_name AS first_name, e1.last_name AS last_name, role.title AS job_title, department.name AS department_name, role.salary AS salary, CONCAT(e2.first_name," ",e2.last_name) AS manager
                FROM employee e1
                LEFT JOIN role
                ON e1.role_id = role.id
                LEFT JOIN department
                ON role.department_id = department.id
                LEFT JOIN employee e2
                ON e1.manager_id = e2.id
                WHERE role.department_id = ?
                `;
    const params = answers.department_id;

    db.promise().query(sql,params)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Add a department
const addDepartment = (answers) => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [answers.name];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`${answers.name} successfully added.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Add a role
const addRole = (answers) => {
    const sql = `INSERT INTO role (title,salary,department_id) VALUES (?,?,?)`;
    const params = [answers.title, answers.salary, answers.department_id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`${answers.title} successfully added.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Add a role
const addEmployee = (answers) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`${answers.first_name + " " + answers.last_name} successfully added.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Update a role
const updateEmployeeRole = (answers) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [answers.role_id,answers.id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`Employee ${answers.id} successfully updated.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Update a manager
const updateEmployeeManager = (answers) => {
    const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
    const params = [answers.manager_id,answers.id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`Employee ${answers.id} successfully updated.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Delete a department
const deleteDepartment = (answers) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [answers.id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`Department ${answers.id} successfully deleted.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Delete a role
const deleteRole = (answers) => {
    const sql = `DELETE FROM role WHERE id = ?`;
    const params = [answers.id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`Role ${answers.id} successfully deleted.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//Delete an employee
const deleteEmployee = (answers) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [answers.id];

    db.promise().query(sql, params)
        .then(() => {
            console.log(`Employee ${answers.id} successfully deleted.`);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

//View total budget
const getBudget = (answers) => {
    const sql = `SELECT SUM(salary) AS total_salary
                FROM employee
                LEFT JOIN role
                ON employee.role_id = role.id
                LEFT JOIN department
                ON role.department_id = department.id
                WHERE role.department_id = ?`;
    const params = [answers.id];

    db.promise().query(sql, params)
        .then(([rows, fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => {
            db.end()
        });
};

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    getBudget
}