const express = require('express');
const create = require('./controllers/create.controller');
const get = require('./controllers/get.controller');

const router = express.Router();

router.post('/', create);
router.get('/:id', get);
// router.put('/:id', isJwtAuthenticated, update);
// router.get('/', isJwtAuthenticated, list);
// router.delete('/:id', isJwtAuthenticated, remove);


module.exports = router;