const express = require('express');
const create = require('./controllers/create.controller')
const get = require('./controllers/get.controller');

const router = express.Router();

router.get('/:firebaseUid', get);
router.post('/payment', create);

module.exports = router;