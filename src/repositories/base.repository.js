class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll(pageSize = 10, pageNumber = 1) {
        const skip = (pageNumber - 1) * pageSize;
        return await this.model
            .find({})
            .skip(skip)
            .limit(pageSize);
    }

    async create(entity) {
        return this.model.create(entity);
    }

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;
