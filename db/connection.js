const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '?msqlKW?',
    database: 'employees'
});

module.exports = db;