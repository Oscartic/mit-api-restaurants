const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const db = require('../config/mongodb');
const cors = require('cors');

db.connect();
const app = express();
app.use(bodyParser.json());
app.use(cors());
routes.default(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log("Root app")
    res.send('hello world');
});

app.listen(process.env.API_PORT, () => {
    console.info('API run in port: ', process.env.API_PORT);
});

module.exports = app;