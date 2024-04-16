const {Router} = require('express');

module.exports = function ({UserController}) {
    const router = new Router();

    //getters
    router.get('', UserController.getAll);
    router.get('/:idUser', UserController.get);


    //posts

    //putters
    router.put('/:idUser', UserController.update);

    //deletes
    router.delete('/:idUser', UserController.delete);

    return router;
}