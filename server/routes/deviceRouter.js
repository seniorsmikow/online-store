const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkUserRole = require('../middleware/checkUserRole');


router.post('/', checkUserRole('ADMIN'), deviceController.createDevice);
router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getOneDevice);

module.exports = router;