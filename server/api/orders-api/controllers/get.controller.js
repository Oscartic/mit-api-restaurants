const OrdersService = require('../../../services/orders-services');

module.exports = async function get (req, res) {

    const { firebaseUid } = req.params;

    try {
        const response = await OrdersService.get({ firebaseUid });
        if(response.error) return res.status(400).send(response);
        return res.status(200).send(response);
    } catch (error) {
        console.log('[get.controller] >>> ', error);
        return res.status(500).send({error, message: 'Internal Server Error'});
    };
}

