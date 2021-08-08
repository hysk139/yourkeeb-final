const router = require('express').Router()
const controller = require('../controller/editController')

// router for appetizer
router.put('/update/keyboard/:id', controller.updateKbById);
router.delete('/delete/keyboard/:id', controller.deleteKbById);
router.put('/update/brand/:id', controller.updateBrandById);
router.delete('/delete/brand/:id', controller.deleteBrandById);
router.put('/update/layout/:id', controller.updateLayoutById);
router.delete('/delete/layout/:id', controller.deleteLayoutById);
router.put('/update/switch/:id', controller.updateSwitchById);
router.delete('/delete/switch/:id', controller.deleteSwitchById);

module.exports = router;