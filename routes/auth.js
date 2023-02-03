const { Router } = require('express');
const router = Router();

// ========== Controllers ==========
const auth = require('../controllers/auth');

// ========== Get Routes ==========
router.get('/sign-up', auth.signup_get);
router.get('/sign-in', auth.signin_get);

// ========== Post Routes ==========
router.post('/sign-up', auth.signup_post);
router.post('/sign-in', auth.signin_post);

module.exports = router;