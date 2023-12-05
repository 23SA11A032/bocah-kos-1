const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '147.139.198.101',
    user: 'bocahkost',
    password: 'bocahkost',
    database: 'bocahkost',
});

module.exports = connection
