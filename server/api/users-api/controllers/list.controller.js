const UsersService = require('../../../services/users-services');

module.exports = async function list (req, res) {

    const { id: userId } = req.params;

    try {
        const response = await UsersService.list();
        return res.status(200).send(response);
    } catch (error) {
        console.log('[list.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}