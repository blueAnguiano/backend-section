const BaseRepository = require('./base.repository');

let _Comment = null;
class CommentRepository extends BaseRepository{
    constructor({Comment}) {
        super(Comment);

        _Comment = Comment;
    }
}

module.exports = CommentRepository;