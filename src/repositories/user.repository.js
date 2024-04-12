const BaseRepository = require('./base.repository');


let _User = null;
class UserRepository extends BaseRepository{
    constructor({User}) {
        super(User);
        _User = User;
    }

    async getUserByName(username) {
        return await _User.findOne(username);
    }

}

module.exports = UserRepository;