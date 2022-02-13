const User = require('../models/user.model');

module.exports = async function remove({ userId }) {
    try {
        const user = await User.deleteOne({userId});
        if (user && user.deletedCount == 0) return {error: 'User does not exists in database'}; 
        return { user };   
    } catch (error) {
        console.log('[remove.action] >>> ', error);
        return error; 
    }
};
