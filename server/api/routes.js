const apiUsers = require('./users-api/routes');
const apiRestaurants = require('./restaurants-api/routes');

module.exports.default = (app) => {

    app.use('/api/users', apiUsers);
    app.use('/api/restaurants', apiRestaurants);

    app.use('/api/status', (req, res) => {
        res.status(200);
        res.send({ message: 'Mit Api Restaurants works and it status is online 🔛' });
        res.end();
    });
};
