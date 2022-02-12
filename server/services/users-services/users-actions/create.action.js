const User = require('../models/user.model');

module.exports = async function create ({
    name,
    nickname,
    email, 
    password 
}) {
    try {
        const user = await User.create({
            name,
            nickname,
            email, 
            password 
        });

        console.log(user);
        return { user };    
    } catch (error) {
        console.log('[create.action] >>> ', error);
        return error; 
    }

}