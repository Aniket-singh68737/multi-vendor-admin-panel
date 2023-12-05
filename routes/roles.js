const express = require('express');
const router = express.Router();
const RolesController = require('../controllers/rolesController');

router.post('/create', RolesController.createRoles);

module.exports = router;
