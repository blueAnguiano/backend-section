let _homeService = null;
// you will indicate as a private variable with underscore _variableName

class HomeController {
    constructor({HomeService}) {
        _homeService = HomeService;
        //you should not use this._variableName because if you, you will be declaring a variable inside this scope
        //so when you are exporting this class, is only showing the scope of this class not all the context

    }

    index(req, res) {
        res.send(_homeService.index());
    }
}

module.exports = HomeController;