const Order = require('../models/order.model');

module.exports = async function get({ firebaseUid }) {
    try {
        const orders = await Order.find({ firebaseUid });
        return { orders };   
    } catch (error) {
        console.log('[get.action] >>> ', error);
        return error; 
    }
};
