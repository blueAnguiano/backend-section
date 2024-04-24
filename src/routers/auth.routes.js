const { Router } = require('express');

module.exports = function ({AuthController}) {
    const router = new Router();

    router.post('/singUp', AuthController.singUp);
    router.post('/login', AuthController.login);

    return router;
}