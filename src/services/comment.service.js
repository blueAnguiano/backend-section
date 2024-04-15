const Base = require('./base.service');
let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends Base {
    constructor({CommentRepository, IdeaRepository}) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getCommentsIdea(idIdea){
        const idea = await _ideaRepository._validateIdea(idIdea);

        const {comments} = idea;
        return comments;
    }

    async createComment(comment, idIdea) {
        const idea = await _ideaRepository._validateIdea(idIdea);

        const newComment = await idea.createComment(comment);
        idea.comments.push(newComment);
        return idea.update(idIdea, {comments: idea.comments});
    }
}

module.exports = CommentService;