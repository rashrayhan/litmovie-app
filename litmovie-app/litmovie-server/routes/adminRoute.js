const router = require('express').Router();
const adminController = require('../controllers/adminController')


router.get('/', adminController.getCities)
router.post('/cities', adminController.addCity)

module.exports = router;