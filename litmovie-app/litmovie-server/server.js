const express = require('express');
const helmet = require('helmet');
const path = require('path');
const votersRoutes = require('./server/routes/voters');
const generalRoutes = require('./server/routes/generalRoute');
const port = process.env.port || 4600;
require('dotenv').config()
const mongoose = require('mongoose')


const app = express();

app.use(express.static(path.join(__dirname, 'dist/evoting-app')));
app.use(helmet());

app.use('api/evote', votersRoutes);

//general routes *
app.use('', generalRoutes);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`app is running on port: ${port}`)
  })

}).catch((err) => {
  console.log(err)
})

