class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll(id) {
        return await this.model.find();
    }

    async create(entity) {
        return this.model.create(entity);
    }

    async update(id, entity) {
        return this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    async delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports =  BaseRepository;