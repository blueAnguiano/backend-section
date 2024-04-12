const BaseRepository = require('./base.repository');

let _Idea = null;
class IdeaRepository extends BaseRepository{
    constructor({Idea}) {
        super(Idea);
        _Idea = Idea;
    }

    async getUserIdea(author) {
        return await _Idea.find({author});
    }
}

module.exports = IdeaRepository;