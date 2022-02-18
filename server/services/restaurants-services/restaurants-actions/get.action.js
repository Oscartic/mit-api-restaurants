const Restaurant = require('../models/restaurant.model');

module.exports = async function get({ id }) {
    try {
        const restaurant = await Restaurant.findOne({ restaurantId: id });
        if (!restaurant) return {error: 'Restaurant does not exists in database'}; 
        return { restaurant };   
    } catch (error) {
        console.log('[get.action] >>> ', error);
        return error; 
    }
};
