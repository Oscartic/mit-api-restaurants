const apiUsers = require('./users-api/routes');

module.exports.default = (app) => {

    app.all('*', (req, res, next) => {
        res.cookie("XSRF_TOKEN", req.csrfToken());
        next();
    });

    app.use('/api/users', apiUsers);

    app.use('/api/status', (req, res) => {
        res.status(200);
        res.send({ message: 'Mit Api Restaurants works and it status is online 🔛' });
        res.end();
    });

};
