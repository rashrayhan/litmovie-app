const router= require('express').Router();

router.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/dist/evoting-app/index.html'));
})

module.exports = router;
