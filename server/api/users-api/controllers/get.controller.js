const UsersService = require('../../../services/users-services');

module.exports = async function get (req, res) {
 
    const { id: userId } = req.params;
    console.log(userId)
    try {
        const response = await UsersService.get({ userId });

        if(response.error) return res.status(400).send(response);
        return res.status(200).send(response);
    } catch (error) {
        console.log('[get.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    };
}