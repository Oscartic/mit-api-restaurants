const User = require('../models/user.model');

module.exports = async function get({ firebaseUid }) {
    try {
        const user = await User.findOne({ firebaseUid });
        if (!user) return {error: 'User does not exists in database'}; 
        return { user };   
    } catch (error) {
        console.log('[get.action] >>> ', error);
        return error; 
    }
};
