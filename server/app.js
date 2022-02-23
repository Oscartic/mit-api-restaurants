const express = require('express');
const routes = require('./api/routes');
const cookieParser = require('cookie-parser');
const csrf = require("csurf");
const bodyParser = require('body-parser');
const db = require('../config/mongodb');
const cors = require('cors');
const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const csrfMiddleware = csrf({ cookie: true});

const PORT = process.env.API_PORT || 3001;

const PORT = process.env.PORT || 5001;

db.connect();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);
app.use(cors());

routes.default(app);

app.listen(PORT, () => {
    console.info('API run in port: ', PORT);
});

module.exports = app;