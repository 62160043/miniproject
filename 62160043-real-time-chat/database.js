const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : 'Satawat1.', // MYSQL PASSWORD
    database : 'realtimechat' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;