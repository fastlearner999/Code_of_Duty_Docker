const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goal')

router.get('/', goalController.index)
router.get('/:id', goalController.show)
router.post('/', goalController.create)
router.put('/', goalController.update)
router.delete('/:id', goalController.destroy)

module.exports = router;