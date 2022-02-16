const Restaurant = require('../models/restaurant.model');

module.exports = async function update ({
    restaurantId,
    name,
    description,
    imageUrl,
    dishes
}) {
    try {
        const findRestaurant = await Restaurant.findOne({ restaurantId });
        if(!findRestaurant) return {error: 'user ID does not exist in db'}; 
        const restaurant = await Restaurant.findOneAndUpdate(
            { restaurantId },
            {
                name,
                description,
                imageUrl,
                dishes
            },
            {
                omitUndefined: true,
                new: true,
            },
        );
        return { restaurant };    
    } catch (error) {
        console.log('[update.action] >>> ', error);
        return error; 
    };
};