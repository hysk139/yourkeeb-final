const router = require('express').Router()
const controller = require('../controller/brandController')

// router for appetizer
router.get('/', controller.getAllBrand);
router.get('/:id', controller.getBrandById);
router.post('/add/', controller.insertBrand);

module.exports = router;