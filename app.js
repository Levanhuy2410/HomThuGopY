const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Import Routes
const postRoute = require('./routes/routes');
app.use('/feedback', postRoute);


// connect to db
mongoose.connect('mongodb://localhost:27017/HomThuGopY', { useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, () => {
    console.log('connected to DB');
})

app.listen(3000, () => console.log('Listening on port 3000'));
