const _ideaService = require("./comment.controller");
let _commentService = null;

class CommentController {
    constructor({CommentService}) {
        _commentService = CommentService;
    }

    //getters
    async get(req, res) {
        const {idComment} = req.params;
        const comment = await _commentService.get(idComment);
        return res.send(comment);
    }

    async getAll(req, res) {
        const comments = await _commentService.getAll();
        return res.send(comments);
    }

    async getCommentsIdea(req, res) {
        const {idIdea} = req.params;
        const comments = await _ideaService.getCommentsIdea(idIdea);
        return res.send(comments);
    }

    //posts
    async makeAComment(req, res) {
        const {body} = req.body;
        const {idIdea} = req.params;
        const newComment = _commentService.createComment(body, idIdea);
        return res.status(201).send(newComment);

    }

    //putters
    async update(req, res) {
        const {body} = req;
        const {idComment} = req.params;
        const updatedComment = await _commentService.update(idComment, body);
        return res.send(updatedComment);
    }

    //deletes
    async delete(req, res) {
        const {idComment} = req.params;
        const deletedComment = await _commentService.delete(idComment);
        return res.send(deletedComment);
    }

}

module.exports = CommentController;