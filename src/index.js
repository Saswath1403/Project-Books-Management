const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://saurabhshete281:JBmRPjzC58VOejIX@cluster0.jih1tjw.mongodb.net/group66Database-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
