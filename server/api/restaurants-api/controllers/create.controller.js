const Joi = require('joi');
const RestaurantsService = require('../../../services/restaurants-services');
const CreateRestaurantValidationSchema = require('../schemas/create.schema');

const schema = Joi.object().keys(CreateRestaurantValidationSchema);

module.exports = async function create (req, res) {
    const { body } = req;
    try {
        const bodyValues = await schema.validateAsync(body);
        let { name, description, imageUrl, dishes} = bodyValues;
        const response  = await RestaurantsService.create({
            name, description, imageUrl, dishes
        });
        if(response.error) return res.status(400).send({ response });
        return res.status(201).send({ response });
        
    } catch (error) {
        console.log('[create.controller] >>> ', error);
        return res.status(400).send({ error: error.message});
    }
}

