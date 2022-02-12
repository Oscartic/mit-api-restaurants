const Joi = require('Joi');
const UsersService = require('../../../services/users-services');
const CreateUserValidationSchema = require('../schemas/create.schema');

const schema = Joi.object().keys(CreateUserValidationSchema);

module.exports = async function create (req, res) {
    const { body } = req;
    
    try {
        const bodyValues = await schema.validateAsync(body);
        const { name, nickname, email, password } = bodyValues;
        const response  = await UsersService.create({
            name, nickname, email, password,
        });
        if(response.errors) return res.status(400).send({ response });
        return res.status(201).send({ response });
        
    } catch (error) {
        console.log('[create.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}