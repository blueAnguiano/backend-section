const {Router} = require('express');

const {ParseIntMiddleware} = require('../middlewares');

module.exports = function ({IdeaController}) {
    const router = new Router();

    //getters
    router.get('', ParseIntMiddleware, IdeaController.getAll);
    router.get('/:idIdea', IdeaController.get);
    router.get('/:idAuthor', IdeaController.getIdeasByAuthor)

    //posts
    router.post('', IdeaController.create);
    router.post('/:idIdea/:isUpVote', IdeaController.voteIdea);

    //putters
    router.put('/:idIdea', IdeaController.update);


    //deletes
    router.delete('/:idIdea', IdeaController.delete);

    return router;
}