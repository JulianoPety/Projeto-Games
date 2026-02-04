const db = require('../database/database');

const user = {

    getUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, callback);
    },

    createUser: (user, callback) => {
        const { name, surname, email } = user;
        const sql = 'INSERT INTO users (name, surname, email) VALUES (?, ?, ?)';
        db.query(sql, [name, surname, email], callback);
    },

    updateUser: (id, user, callback) => {
        const { name, surname, email } = user;
        const sql = 'UPDATE users SET name = ?, surname = ?, email = ? WHERE id = ?';
        db.query(sql, [name, surname, email, id], callback);
    },

    deleteUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], callback);
    },

    getById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = user;