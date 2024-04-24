const {Router} = require('express');

const {
    AuthMiddleware,
    ParseIntMiddleware,
    CacheMiddleware
} = require('../middlewares');

const {TIME} = require('../helpers')

module.exports = function ({UserController}) {
    const router = new Router();

    //getters
    router.get('', [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(TIME.ONE_HORE)], UserController.getAll);
    router.get('/:idUser', UserController.get);

    //posts

    //putters
    router.put('/:idUser', UserController.update);

    //deletes
    router.delete('/:idUser', UserController.delete);

    return router;
}