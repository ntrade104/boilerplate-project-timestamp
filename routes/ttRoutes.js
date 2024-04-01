const express = require('express');
const ttController = require('../controller/ttController')

const router = express.Router();

router.route('/:date').get(ttController.getTime);
router.route('/').get(ttController.getDefaultTime);


module.exports = router;