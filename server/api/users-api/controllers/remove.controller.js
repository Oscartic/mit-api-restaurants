const UsersService = require('../../../services/users-services');

module.exports = async function remove (req, res) {

    const { id: userId } = req.params;

    try {
        const response = await UsersService.remove({ userId });

        if(response.error) return res.status(400).send(response);
        return res.status(204).send(response);
    } catch (error) {
        console.log('[remove.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}