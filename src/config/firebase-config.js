var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://authen-39b0f-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = admin;