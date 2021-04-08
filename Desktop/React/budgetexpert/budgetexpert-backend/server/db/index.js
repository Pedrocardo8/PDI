const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    password: 'cbse',
    user:'cbse',
    database: 'budget',
    host: 'localhost',
    port: '3306'
});

let budgetdb = {};

budgetdb.all = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM transactions', (err, results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
};

budgetdb.one = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM transactions WHERE userId = ?', id,(err, results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
};

budgetdb.add = (category, amount, description, userId) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO transactions (category, amount, description, userId) VALUES (?,?,?,?)', category, amount,description, userId,(err, results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
};

module.exports = budgetdb;