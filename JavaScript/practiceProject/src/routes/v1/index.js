const { Router } = require('express');
const airplaneRoutes = require('./airplane-routes');

const router = Router();

router.use('/airplanes', airplaneRoutes);


module.exports = router;