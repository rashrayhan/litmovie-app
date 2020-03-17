const express = require('express');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//const config = require("./config/key");
const port = process.env.port || 4600;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/evoting-app')));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/user'));
//app.use('/api/comment', require('./routes/comment'));
//app.use('/api/like', require('./routes/like'));
app.use('/api/favorite', require('./routes/favorite'));
//app.use('/uploads', express.static('uploads'));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


//general routes *
//app.use('', generalRoutes);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`app is running on port: ${port}`)
  })

}).catch((err) => {
  console.log(err)
})

