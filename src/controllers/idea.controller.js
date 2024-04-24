let _ideaService = null;

class IdeaController {
    constructor({IdeaService}) {
        _ideaService = IdeaService;
    }

    //getters
    async get(req, res) {
        const {idIdea} = req.params;
        const idea = await _ideaService.get(idIdea);
        return res.send(idea);
    }

    async getAll(req, res) {
        const {pageSize, pageNumber} = req.query;
        const ideas = await _ideaService.getAll(pageSize, pageNumber);
        return res.send(ideas);
    }

    async getIdeasByAuthor(req, res) {
        const {idAuthor} = req.params;
        const ideaAuthor = await _ideaService.getUserIdea(idAuthor);
        return res.send(ideaAuthor);
    }

    //post
    async create(req, res) {
        const {body} = req;
        const createIdea = await _ideaService.create(body);
        return res.status(201).send(createIdea);
    }

    //putters
    async update(req, res) {
        const {body} = req;
        const {idIdea} = req.params;

        const updatedIdea = await _ideaService.update(idIdea, body);
        return res.send(updatedIdea);
    }

    async voteIdea(req, res) {
        const {idIdea, isUpVote} = req.params;
        let ideaVoted;
        if(isUpVote) {
            ideaVoted = await _ideaService.upVoteIdea(idIdea)
        } else {
            ideaVoted = await _ideaService.downVoteIdea(idIdea);
        }
        return res.send(ideaVoted);
    }

    //deletes
    async delete(req, res) {
        const {idIdea} = req.params;
        const deletedIdea = await _ideaService.delete(idIdea);
        return res.send(deletedIdea);
    }


}

module.exports = IdeaController;