const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');


mongoose.Promise = global.Promise;



mongoose.connect("mongodb://127.0.0.1:27017/db", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
      
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 8080
require('./app/routes/app.routes.js')(app);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


