const User = require('../models/user.model');

module.exports = async function get({ userId }) {
    try {
        const user = await User.findOne({ userId });
        if (!user) return {error: 'User does not exists in database'}; 
        return { user };   
    } catch (error) {
        console.log('[get.action] >>> ', error);
        return error; 
    }
};
