const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();
const checkUserRole = require('../middleware/checkUserRole');


router.post('/', checkUserRole('ADMIN'), basketController.createBasket);
router.get('/', basketController.getBasketDevices);

module.exports = router;