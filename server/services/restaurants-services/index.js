const create = require('./restaurants-actions/create.action');
const get = require('./restaurants-actions/get.action');
const update = require('./restaurants-actions/update.action');
const remove = require('./restaurants-actions/remove.action');
const list = require('./restaurants-actions/list.action');

module.exports = {
    create,
    get,
    update,
    remove,
    list
};