const Joi = require('joi');
const UsersService = require('../../../services/users-services');
const admin = require('../../../../config/firebaseAdmin');
module.exports = async function create (req, res) {
    const { firebaseId } = req.params;
    
    try {
        const { uid: firebaseUid, displayName, email } = await admin.auth().getUser(firebaseId);
        const response  = await UsersService.create({
            firebaseUid, displayName, email,
        });
        if(response.error) return res.status(400).send({ response });
        return res.status(201).send({ response });
        
    } catch (error) {
        console.log('[create.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}