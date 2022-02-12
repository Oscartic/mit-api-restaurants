const Joi = require('Joi');
const UsersService = require('../../../services/users-services');
const CreateUserValidationSchema = require('../schemas/create.schema');

const schema = Joi.object().keys(CreateUserValidationSchema);

module.exports = async function create (req, res) {
    const { body } = req;
    
    try {
        const bodyValues = await schema.validateAsync(body);
        const { name, nickname, email, password } = bodyValues;
        const { user } = await UsersService.create({
            name, nickname, email, password,
        });
        return res.send(user);
        
    } catch (error) {
        console.log('[create.controller] >>> ', error);
        return res.send(error);
    }
}