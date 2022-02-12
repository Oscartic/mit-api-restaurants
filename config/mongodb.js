const mongoose = require('mongoose');

module.exports = class DB {
  static connect() {
    return mongoose.connect(process.env.MONGO_CONNECTION_STR, {});
  }
};
