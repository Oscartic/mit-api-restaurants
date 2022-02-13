const User = require('../models/user.model');

module.exports = async function create ({
    name,
    nickname,
    email, 
    password 
}) {
    try {
        const findUser = await User.findOne({ email });
        if(findUser) return {error: 'Email already exists'}; 
        const user = await User.create({
            name,
            nickname,
            email, 
            password 
        });
        return { user };    
    } catch (error) {
        console.log('[create.action] >>> ', error);
        return error; 
    }

}