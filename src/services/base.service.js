class BaseService{
    constructor(Repository) {
        this.repository = Repository;
    }

    async get(id) {
        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Id is a required field'
            throw error;
        }

        const repo = await this.repository.get(id);

        if(!repo) {
            const error = new Error();
            error.status = 400;
            error.message = 'Entity is not find'
            throw error;
        }

        return repo;
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async create(entity) {
        return this.repository.create(entity);
    }

    async update(id, entity) {
        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Id is a required field'
            throw error;
        }

        return this.repository.update(id, entity);
    }

    async delete(id) {
        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Id is a required field'
            throw error;
        }

        return this.repository.delete(id);
    }

}

module.exports = BaseService;