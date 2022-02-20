const stripe = require('stripe')(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require('uuid');
const OrdersService = require('../../../services/orders-services');

module.exports = async function create (req, res) {
    const { itemsCart, token } = req.body;
    const amountPayable = itemsCart.map(e => Number(e.price).toFixed(2) * e.quantity).reduce((acc, cur) => Number(acc) + Number(cur), [0]);
    const idempotencyKey = uuidv4();
    
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        }); 
        console.log('[Api-Orders][create.controller] >>> customer >>> ',customer.id);
        const total = Number(amountPayable).toFixed(2) * 100;

        const charges = await stripe.charges.create(
            {
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
            }
        );
        console.log('[Api-Orders][create.controller] >>> Charges >>> ', charges.id);
        if (charges) {
            const {
                id: stripeIdCharge, 
                amount, 
                currency, 
                status, 
                receipt_email, 
                description, 
                source
            } = charges;

            const response  = await OrdersService.create({
                stripeIdCharge, 
                amount, 
                currency, 
                status, 
                receipt_email, 
                description, 
                source
            });
            return res.status(200).json(response);
        };
        
    } catch (error) {
        console.log('[Api-Orders][create.controller] >>> ', error);
        return res.status(500).send({error: 'Internal Server Error', details: error});
    };

};


