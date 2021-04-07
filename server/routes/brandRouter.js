const Router = require('express');
const brandController = require('../controllers/brandController');
const router = new Router();
const checkUserRole = require('../middleware/checkUserRole');


//router.post('/', checkUserRole('ADMIN'), brandController.createBrand);
router.post('/', brandController.createBrand)
router.get('/', brandController.getAllBrands);

module.exports = router;
