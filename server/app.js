const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const db = require('../config/mongodb');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

db.connect();
const app = express();
app.use(bodyParser.json());
app.use(cors());
routes.default(app);

app.listen(PORT, () => {
    console.info('API run in port: ', PORT);
});

module.exports = app;