const Joi = require('Joi');
const RestaurantsService = require('../../../services/restaurants-services');
const CreateRestaurantValidationSchema = require('../schemas/update.schema');

const schema = Joi.object().keys(CreateRestaurantValidationSchema);

module.exports = async function update (req, res) {
    
    const { id: restaurantId } = req.params;
    const { body } = req;
    
    try {
        const bodyValues = await schema.validateAsync(body);
        const { name, description, imageUrl } = bodyValues;
        const response  = await RestaurantsService.update({
            restaurantId, name, description, imageUrl
        });
        if(response.error) return res.status(400).send({ response });
        return res.status(204).send({ response });
        
    } catch (error) {
        console.log('[update.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}