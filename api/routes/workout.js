const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workout')

router.get('/', workoutController.index)
router.get('/:id', workoutController.show)
router.post('/', workoutController.create)
router.put('/', workoutController.update)
router.delete('/:id', workoutController.destroy)

module.exports = router;