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

app.listen(process.env.API_PORT, () => {
    console.info('API run in port: ', process.env.API_PORT);
});

module.exports = app;