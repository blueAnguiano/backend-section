const {JWTHelper} = require('../helpers');

let _userService = null;

class AuthService {
    constructor({UserService}) {
        _userService = UserService;
    }

    async validateUsername(username) {
        const exists = await _userService.getUserByName(username);

        return {exists: !!exists, user: exists};
    }

    async singUp(user) {
        const {username} = user;
        const validate = await this.validateUsername(username);

        if(validate.exists) {
            const error = new Error();
            error.status = 400;
            error.message = 'User already exists';
            throw error;
        }

        return _userService.create(user);

    }

    async singIn(user){
        const {username, password} = user;
        const validate = await this.validateUsername(username);

        if(!validate.exists) {
            const error = new Error();
            error.status = 400;
            error.message = 'User already exists';
            throw error;
        }

        const coincided = validate.user.comparePasswords(password);

        if(!coincided) {
            const error = new Error();
            error.status = 400;
            error.message = 'Invalid user or password';
            throw error;
        }

        const encode = {
            username: validate.user.username,
            id: validate.user._id
        }

        const token = JWTHelper.generateToke(encode);

        return {token, user: validate.user};
    }

}

module.exports = AuthService;