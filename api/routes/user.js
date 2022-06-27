const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.post('/login', userController.login)
router.post('/logout', userController.logout)

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.create)
router.put('/', userController.update)
router.delete('/:id', userController.destroy)

module.exports = router;