const router = require('express').Router()
const controller = require('../controller/keyboardController')

// router for appetizer
router.get('/', controller.getAllKeyboard);
router.get('/:id', controller.getKeyboardByID);
router.get('/data/:id', controller.getKeyboardDataByID);
router.post('/add/', controller.insertKeyboard);

module.exports = router;