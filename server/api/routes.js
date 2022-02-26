const csrf = require("csurf");
const apiUsers = require('./users-api/routes');
const apiRestaurants = require('./restaurants-api/routes');
const apiOrders = require('./orders-api/routes');
const admin = require('../../config/firebaseAdmin');
const { decodeToken } = require('../middleware');



module.exports.default = (app) => {

    const csrfProtection = csrf({ cookie: true});
    // app.get('/api/get_certificate', (req, res) => {
    //     res.send({XSRF_TOKEN: req.csrfToken() });
    // });
    
    // app.all('*', csrfProtection, (req, res, next) => {
    //     res.cookie("XSRF_TOKEN", req.csrfToken());
    //     next();
    // });

    app.use('/api/restaurants', apiRestaurants);
    app.use('/api/users', decodeToken, apiUsers);
    app.use('/api/orders', decodeToken, apiOrders);

    app.use('/api/status', (req, res) => {
        res.status(200);
        res.send({ message: 'Mit Api Restaurants works and it status is online 🔛' });
        res.end();
    });

};
