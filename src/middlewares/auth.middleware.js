const jwt  = require("jsonwebtoken");
const { JWT_SECRET} = require('../config');

module.exports = function (req, res, next) {
    const token = req.headers.authorization;
    if(!token) {
        const error = new Error();
        error.status = 400;
        error.message = 'Authorization header is missing'
        throw error;
    }

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if(error) {
            const error = new Error();
            error.status = 401;
            error.message = 'Invalid token';
            throw error;
        }

        req.user = decoded.user;
        next();
    })
}