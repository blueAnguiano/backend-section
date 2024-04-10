//dependencies
const {createContainer, asClass, asValue, asFunction} = require('awilix');

//configuration
const config = require('../config');
const app = require('.');

//Services
const {HomeService} = require('../services');

//Controllers
const {HomeController} = require('../controllers');

//Routers
const {HomeRoutes} = require('../routers/index.routes');
const routers = require('../routers')

//Models
const {Comment,Idea, User} = require('../models')

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    routers: asFunction(routers).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
});

module.exports = container;