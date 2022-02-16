const Restaurant = require('../models/restaurant.model');

module.exports = async function remove({ userId }) {
    try {
        const restaurant = await Restaurant.deleteOne({userId});
        if (restaurant && restaurant.deletedCount == 0) return {error: 'Restaurant does not exists in database'}; 
        return { restaurant };   
    } catch (error) {
        console.log('[remove.action] >>> ', error);
        return error; 
    }
};
