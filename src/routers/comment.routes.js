const {Router} = require('express');

module.exports = function ({CommentController}) {
    const router = new Router();

    //getters
    router.get('', CommentController.getAll);
    router.get('/:idComment', CommentController.get);
    router.get('/:idIdea', CommentController.getCommentsIdea);

    //posts
    router.post('/make', CommentController.makeAComment);

    //putters
    router.put('', CommentController.update);

    //deletes
    router.delete('/:idComment', CommentController.delete);

    return router;
}