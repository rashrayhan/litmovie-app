const express = require('express');
const path = require('path');
const votersRoutes = require('./server/routes/voters');
const generalRoutes = require('./server/routes/generalRoute');
const port = process.env.port || 4600;

const app = express();

app.use(express.static(path.join(__dirname, 'dist/evoting-app')))

app.use('/evote', votersRoutes);

//general routes *
app.use('', generalRoutes);

app.listen(port, ()=>{
  console.log(`app is running on port: ${port}`)
})
