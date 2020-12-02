const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mailRoutes = require('./mailRoutes');

router.use('/users', userRoutes);
router.use('/mail', mailRoutes);

module.exports = router;
