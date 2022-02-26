const User = require('../models/user.model');

module.exports = async function create ({
    firebaseUid,
    displayName,
    email, 
    password 
}) {
    try {
        const findUser = await User.findOne({ email });
        if(findUser) return {error: 'Email already exists'}; 
        const user = await User.create({
            firebaseUid,
            displayName,
            email, 
            password 
        });
        return { user };    
    } catch (error) {
        console.log('[create.action] >>> ', error);
        return error; 
    }

}