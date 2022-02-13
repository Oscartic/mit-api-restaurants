const Joi = require('Joi');
const UsersService = require('../../../services/users-services');
const CreateUserValidationSchema = require('../schemas/update.schema');

const schema = Joi.object().keys(CreateUserValidationSchema);

module.exports = async function update (req, res) {
    
    const { id: userId } = req.params;
    const { body } = req;
    
    try {
        const bodyValues = await schema.validateAsync(body);
        const { name, nickname, password } = bodyValues;
        const response  = await UsersService.update({
            userId, name, nickname, password,
        });
        console.log(response)
        if(response.error) return res.status(400).send({ response });
        return res.status(204).send({ response });
        
    } catch (error) {
        console.log('[update.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}