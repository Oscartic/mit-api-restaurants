const User = require('../models/user.model');

module.exports = async function update ({
    userId,
    name,
    nickname,
    password 
}) {
    try {
        const findUser = await User.findOne({ userId });
        if(!findUser) return {error: 'user ID does not exist in db'}; 
        const user = await User.findOneAndUpdate(
            { userId },
            {
                name,
                nickname,
                password,
            },
            {
                omitUndefined: true,
                new: true,
            },
        );
        return { user };    
    } catch (error) {
        console.log('[update.action] >>> ', error);
        return error; 
    };
};