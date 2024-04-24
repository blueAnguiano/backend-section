const {Router} = require('express');

const {AuthMiddleware} = require('../middlewares');

module.exports = function ({UserController}) {
    const router = new Router();

    //getters
    router.get('', [AuthMiddleware], UserController.getAll);
    router.get('/:idUser', UserController.get);

    //posts

    //putters
    router.put('/:idUser', UserController.update);

    //deletes
    router.delete('/:idUser', UserController.delete);

    return router;
}