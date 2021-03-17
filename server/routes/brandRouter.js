const Router = require('express');
const brandController = require('../controllers/brandController');
const router = new Router();


router.post('/', brandController.createBrand);
router.get('/', brandController.getAllBrands);

module.exports = router;
