const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkUserRole = require('../middleware/checkUserRole');


router.post('/', checkUserRole('ADMIN'), typeController.createType);
router.get('/', typeController.getAllTypes);

module.exports = router;