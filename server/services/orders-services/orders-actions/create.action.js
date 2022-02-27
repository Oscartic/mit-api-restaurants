const Order = require('../models/order.model');

module.exports = async function create ({
    stripeIdCharge, 
    firebaseUid,
    amount, 
    currency, 
    status, 
    receipt_email, 
    description, 
    source
}) {
    try {
        const order = await Order.create({
            stripeIdCharge, 
            firebaseUid,
            amount, 
            currency, 
            status, 
            receipt_email, 
            description, 
            source
        });
        return { order };
    } catch (error) {
        console.log('[Order][create.action] >>> ', error);
        return error; 
    }    
};