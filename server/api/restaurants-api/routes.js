const express = require('express');
const create = require('./controllers/create.controller');
const get = require('./controllers/get.controller');
const update = require('./controllers/update.controller');
const remove = require('./controllers/remove.controller');
const list = require('./controllers/list.controller');

const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);


module.exports = router;