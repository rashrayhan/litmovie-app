const router = require('express').Router();
const votersController = require('../controllers/votersController')

router.get('/', votersController.getPolls)

module.exports = router;
