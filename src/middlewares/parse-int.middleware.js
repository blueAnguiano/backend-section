module.exports = function (req, res, next) {
    const query = req.query;
    for(const key in query) {
        const length = query[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(query[key]));

        if(isValid) {
            query[key] = parseInt(query[key]);
        }
    }

    req.query = query;
    next();
}