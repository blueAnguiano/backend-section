const express = require('express');


let _express = null;
let _config = null;

class Server {
    constructor({config, routers}) {
        _config = config;
        _express = express().use(routers);
    }

    start(){
        return new Promise(resolve => {
           _express.listen(_config.PORT, () => {
               console.log(`Server is alive on port ${_config.PORT}`)
               resolve();
           })
        });
    }
}

module.exports = Server;
