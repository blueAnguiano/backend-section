const Base = require('./base.service');

let _ideaRepository = null;

class IdeaService extends Base {
    constructor({IdeaRepository}) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdea(author) {
        if (!author) {
            const error = new Error();
            error.status = 400;
            error.message = 'Id is a required field';
            throw error;
        }

        return await _ideaRepository.getUserIdea(author);
    }

    async _validateIdea(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Id is a required field';
            throw error;
        }

        const idea = await _ideaRepository.get(id);

        if (!idea) {
            const error = new Error();
            error.status = 404;
            error.message = 'Idea does not exist';
            throw error;
        }

        return idea;
    }

    async upVoteIdea(id) {
        const idea = await this._validateIdea(id);

        idea.upVotes.push(true);

        return await _ideaRepository.update(id, {upVotes: idea.upVotes});
    }

    async downVoteIdea(id) {
        const idea = await this._validateIdea(id);

        idea.downVotes.push(true);

        return await _ideaRepository.update(id, {downVotes: idea.downVotes});
    }
}

module.exports = IdeaService;