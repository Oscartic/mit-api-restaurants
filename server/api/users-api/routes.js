const express = require('express');
const create = require('./controllers/create.controller');
const get = require('./controllers/get.controller');
const update = require('./controllers/update.controller');
const remove = require('./controllers/remove.controller');

const router = express.Router();

router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
// router.get('/', isJwtAuthenticated, list);
router.delete('/:id', remove);


module.exports = router;