const RestaurantsService = require('../../../services/restaurants-services');

module.exports = async function list (req, res) {
    
    try {
        const response = await RestaurantsService.list();
        return res.status(200).send(response);
    } catch (error) {
        console.log('[list.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}