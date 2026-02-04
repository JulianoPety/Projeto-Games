const user = require('../models/userModel');

const userController = {
    getUsers: (req,res) => {
        user.getUsers((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },
    
    createUser: (req, res) => {
        user.createUser(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err})
            res.json(result);
        });
    },

    updateUser: (req, res) => {
        const { id } = req.params;
        user.updateUser(id, req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err})
            res.json(results);
        });
    },

    deleteUser: (req, res) => {
        const { id } = req.params;
        user.deleteUser(id, (err) => {
            if (err) return res.status(500).json({ error: err});
            res.json ({ message: 'Usuário removido com sucesso '});
        });
    }
};

module.exports = userController;