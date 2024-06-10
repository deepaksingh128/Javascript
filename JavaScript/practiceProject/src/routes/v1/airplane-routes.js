const { Router } = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = Router();

router.post('/', 
        AirplaneMiddlewares.validateCreateRequest, 
        AirplaneController.createAirplane
        );

module.exports  = router;