const router = require('express').Router();
const votersController = require('../controllers/votersController')

router.get('/', votersController.registerVoter);

module.exports = router;
