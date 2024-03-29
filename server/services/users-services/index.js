const create = require('./users-actions/create.action');
const get = require('./users-actions/get.action');
const update = require('./users-actions/update.action');
const remove = require('./users-actions/remove.action');
const list = require('./users-actions/list.action');

module.exports = {
    create,
    get,
    update,
    remove,
    list
};