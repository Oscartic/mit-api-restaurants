const UsersService = require('../../../services/users-services');

module.exports = async function info (req, res) {
    try {
        console.log(req.params)
        const { tokenId } = req.params;
        const result = await admin.auth().getUser(tokenId);
        console.log(result)
        return res.status(201).json({message: result });        
    } catch (error) {
        return res.status(500).send({error, message: '[Users][info.controller] Internal Server Error'});
    }
};
