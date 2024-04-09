// on this config file is validating which environment  is executing if is different as production will charge dotenv
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};

