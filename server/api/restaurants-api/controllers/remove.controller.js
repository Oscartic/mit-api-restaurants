const RestaurantsService = require('../../../services/restaurants-services');

module.exports = async function remove (req, res) {

    const { id: restaurantId } = req.params;

    try {
        const response = await RestaurantsService.remove({ restaurantId });

        if(response.error) return res.status(400).send(response);
        return res.status(204).send(response);
    } catch (error) {
        console.log('[remove.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}