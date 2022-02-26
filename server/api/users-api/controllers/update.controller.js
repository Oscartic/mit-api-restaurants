const UsersService = require('../../../services/users-services');

module.exports = async function update (req, res) {
    
    const { id: userId } = req.params;
    const { body } = req;
    
    try {
        const response  = await UsersService.update({
            userId, displayName, password,
        });
        if(response.error) return res.status(400).send({ response });
        return res.status(204).send({ response });
        
    } catch (error) {
        console.log('[update.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}