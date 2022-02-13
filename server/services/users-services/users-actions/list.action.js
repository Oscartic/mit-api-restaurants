const User = require('../models/user.model');

module.exports = async function list() {
    try {
        const users = await User.find();
        return { users };
    } catch (error) {
        console.log('[list.action] >>> ', error);
        return error;    
    }
  };
  