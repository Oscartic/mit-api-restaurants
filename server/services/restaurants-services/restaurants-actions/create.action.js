const Restaurant = require('../models/restaurant.model');

module.exports = async function create ({
    name,
    description,
    imageUrl, 
    dishes 
}) {
    try {
        const findRestaurant = await Restaurant.findOne({ name });
        if(findRestaurant) return {error: 'restaurant name already exists'}; 
        const restaurant = await Restaurant.create({
            name,
            description,
            imageUrl, 
            dishes  
        });
        return { restaurant };    
    } catch (error) {
        console.log('[create.action] >>> ', error);
        return error; 
    }

}