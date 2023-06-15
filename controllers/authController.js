const authService = require('../services/authService');

exports.signup = (req, res) => {
    authService
        .signup(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.signin = (req, res) => {
    authService
        .signin(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.refreshToken = (req, res) => {
    authService
        .refreshToken(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};
