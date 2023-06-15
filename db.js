const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: 'password',
    database: 'your_database_name',
});

connection.connect(function (err, res) {
    if (err) {
        return console.error('Ошибка: ' + err.message);
    } else {
        console.log('Successful connection');
    }
});

module.exports = connection;
