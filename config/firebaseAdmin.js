const admin = require("firebase-admin");
const { adminFirebase } = require('./serviceAccountKey');

admin.initializeApp({
    credential: admin.credential.cert(adminFirebase)
});

module.exports = admin; 