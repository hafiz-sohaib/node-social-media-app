const { Router } = require('express');
const router = Router();

// ========== Controllers ==========
const general = require('../controllers/general');

router.get('/', general.home);

module.exports = router;