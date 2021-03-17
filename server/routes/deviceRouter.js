const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');


router.post('/', deviceController.createDevice);
router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getOneDevice);

module.exports = router;