const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

// Route for returns
router.get('/', returnController.getAllReturns);
router.get('/:id', returnController.getReturnById);
router.post('/', returnController.createReturn);
router.put('/:id', returnController.updateReturn);
router.delete('/:id', returnController.deleteReturn);

module.exports = router;
