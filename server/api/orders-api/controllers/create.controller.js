const stripe = require('stripe')(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require('uuid');
// const Joi = require('Joi');
// const UsersService = require('../../../services/users-services');
// const CreateUserValidationSchema = require('../schemas/create.schema');

module.exports = async function create (req, res) {
    const { itemsCart, token } = req.body;
    const amountPayable = itemsCart.map(e => Number(e.price).toFixed(2) * e.quantity).reduce((acc, cur) => Number(acc) + Number(cur), [0]);
    const idempotencyKey = uuidv4();
    
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        }); 
        console.log('customer >>> ',customer);
        const total = Number(amountPayable).toFixed(2) * 100;
        console.log('total >>> ', total);
        const charges = await stripe.charges.create({
                amount: total,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `${JSON.stringify(itemsCart)}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country
                    }
                }
            }, {
                idempotencyKey: idempotencyKey
            });
            console.log('Charges >>> ', charges);
            if (charges && charges.status === 200){
                // TODO guardar en DB 
            }
        return res.status(200).json(charges);
        
    } catch (error) {
        console.log('[create.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error', details: error});
    };

};