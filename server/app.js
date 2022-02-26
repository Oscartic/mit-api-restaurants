const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const db = require('../config/mongodb');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

const app = express();
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

routes.default(app);
db.connect();

app.listen(PORT, () => {
    console.info('API run in port: ', PORT);
});

module.exports = app;