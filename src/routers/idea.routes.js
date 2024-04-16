const {Router} = require('express');

module.exports = function ({IdeaController}) {
    const router = new Router();

    //getters
    router.get('', IdeaController.getAll);
    router.get('/:idIdea', IdeaController.get);
    router.get('/:idAuthor', IdeaController.getIdeasByAuthor)

    //posts
    router.post('/', IdeaController.create);

    //putters
    router.put('/:idIdea', IdeaController.update);
    router.put('/:idIdea/:isUpVote', IdeaController.voteIdea);

    //deletes
    router.delete('/:idIdea', IdeaController.delete);

    return router;
}