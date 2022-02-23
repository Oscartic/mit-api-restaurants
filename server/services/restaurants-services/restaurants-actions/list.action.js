const Restaurant = require('../models/restaurant.model');

module.exports = async function list() {
    try {
        const restaurants = await Restaurant.find();
        return { restaurants };
    } catch (error) {
        console.log('[list.action] >>> ', error);
        return error;    
    }
  };
  