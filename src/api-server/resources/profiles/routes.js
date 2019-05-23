const Joi = require('@hapi/joi')
const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const models  = require('../../db/models');

router.get('/', controllers.getProfiles)
router.get('/:id', controllers.getProfileById)
router.post('/', controllers.postProfile);
router.delete('/:id', controllers.deleteProfile);
router.put('/:id', controllers.updateProfile);

module.exports = router;