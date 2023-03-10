var admin = require("../config/firebase-config");
const FCM = require('fcm-node')
var serviceAccount = require("../config/serviceAccount.json");
var fcm = new FCM(serviceAccount)

const postNotification = async (userId, notifyData) => {
    console.log(notifyData);

    let fcmToken;
    try {
        await admin
        .database()
        .ref(`/users/${userId}/fcmToken`)
        .once('value')
        .then((snapshot) => {
          fcmToken = snapshot.val();
        })
        console.log("mess",fcmToken);
        var message = {

            to: fcmToken,

            notification: {
                title: notifyData.title, 
                body: notifyData.message, 
            },
            
            data: { 
                my_key: 'my value',
                my_another_key: 'my another value'
            }
        }
        
        fcm.send(message, function(err, response){
            if (err) {
                console.log("Something has gone wrong!")
            } else {
                console.log("Successfully sent with response: ", response)
            }
        })
    
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
module.exports = {
    postNotification
}