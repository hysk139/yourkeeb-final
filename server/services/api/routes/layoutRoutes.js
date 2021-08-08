const router = require('express').Router()
const controller = require('../controller/layoutsController')

// router for appetizer
router.get('/', controller.getAllLayout);
router.get('/:id', controller.getLayoutById);
router.post('/add/', controller.insertLayout);

module.exports = router;