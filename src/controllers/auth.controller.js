let _authService = null;

class AuthController {
    constructor({AuthService}) {
        _authService = AuthService;
    }

    async singUp(req, res) {
        const {body} = req;
        const user = await _authService.singUp(body);
        return res.status(201).send(user);

    }

    async login(req, res) {
        const {body} = req;
        const auth = await _authService.singIn(body);
        return res.send(auth);

    }
}

module.exports = AuthController;