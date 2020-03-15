const router = require('express').Router();
const partiesController = require('../controllers/partiesControlller')

router.get('/', (req, res) => {
    res.send('this is working');
})

module.exports = router;