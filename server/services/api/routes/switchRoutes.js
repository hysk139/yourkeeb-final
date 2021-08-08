const router = require('express').Router()
const controller = require('../controller/switchController')

// router for appetizer
router.get('/', controller.getAllSwitch);
router.get('/:id', controller.getSwitchByID);
router.post('/add/', controller.insertSwitch);

module.exports = router;