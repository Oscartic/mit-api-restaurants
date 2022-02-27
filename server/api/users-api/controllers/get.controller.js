const UsersService = require('../../../services/users-services');

module.exports = async function get (req, res) {

    const { firebaseUid } = req.params;

    try {
        const response = await UsersService.get({ firebaseUid });
        if(response.error) return res.status(400).send(response);
        return res.status(200).send(response);
    } catch (error) {
        console.log('[get.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}
