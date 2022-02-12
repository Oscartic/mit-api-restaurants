const express = require('express');
const create = require('./controllers/create.controller');
const router = express.Router();

router.post('/', create);
// router.get('/:id', isJwtAuthenticated, get);
// router.put('/:id', isJwtAuthenticated, update);
// router.get('/', isJwtAuthenticated, list);
// router.delete('/:id', isJwtAuthenticated, remove);


module.exports = router;