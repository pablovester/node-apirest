const Joi = require('@hapi/joi')
const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const models  = require('../../db/models');

router.get('/', controllers.getUsers);
router.get('/:id', controllers.getById);
router.post('/', controllers.postUser);
router.delete('/:id', controllers.deleteUser);
router.put('/:id', controllers.updateUser);

module.exports = router;