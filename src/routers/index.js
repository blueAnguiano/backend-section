//Dependencies
const express = require('express');

//Middleware
require('express-async-error');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const {NotFoundMiddleware, ErrorMiddleware} = require('../middlewares');

module.exports = function ({HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    //Setting up Middlewares
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    //Setting up the routers
    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);

    router.use('/v1/api', apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}