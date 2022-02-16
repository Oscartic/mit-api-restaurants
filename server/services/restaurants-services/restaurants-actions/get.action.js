const Restaurant = require('../models/restaurant.model');

module.exports = async function get({ userId }) {
    try {
        const restaurant = await Restaurant.findOne({ userId });
        if (!restaurant) return {error: 'Restaurant does not exists in database'}; 
        return { restaurant };   
    } catch (error) {
        console.log('[get.action] >>> ', error);
        return error; 
    }
};
