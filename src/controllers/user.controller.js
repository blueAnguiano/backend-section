let _userService = null;

class UserController {
    constructor({UserService}) {
        _userService = UserService;
    }

    async get(req, res) {
        const {idUser} = req.params;
        const user = await _userService.get(idUser);
        return res.send(user);
    }

    async getAll(req, res) {
        const users = await _userService.getAll();
        return res.send(users);
    }

    /*async create(user) {
        const {} = req.body;

        //user
    }*/

    async update(req, res) {
        const {body} = req;
        const {idUser} = req.params;
        const user = await _userService.update(idUser, body);
        return res.send(user);
    }

    async delete(req, res) {
        const {idUser} = req.params;
        const deletedUser = await _userService.delete(idUser);
        return res.send(deletedUser);
    }
}

module.exports = UserController;