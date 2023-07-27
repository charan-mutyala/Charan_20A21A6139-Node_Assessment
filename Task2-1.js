// Task2-1.js


// db_connection.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
});

module.exports = connection;

const connection = require('./db_connection');

function createDatabase(Charan) {
  const sqlQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
  connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(`Database '${databaseName}' created successfully.`);
  });
}

function createTable() {
  const sqlQuery = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;

  connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(`Table 'employees' created successfully.`);
  });
}

module.exports = {
  createDatabase,
  createTable,
};
