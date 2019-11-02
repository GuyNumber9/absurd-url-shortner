const express = require('express');
const controller = require('../controllers/mainController');

let router = express.Router();

router.get('/', controller.index_get);

router.post('/api/shorturl/new', controller.new_post);

router.get('/api/shorturl/:number', controller.redirect_get)

module.exports = router;