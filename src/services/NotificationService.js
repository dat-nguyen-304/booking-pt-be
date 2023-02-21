var admin = require("firebase-admin");
const FCM = require('fcm-node')
var serviceAccount = require("../config/serviceAccount.json");
var fcm = new FCM(serviceAccount)

const postNotification = async (notifyData) => {

    try {
        var message = {
            to: '', 
            
            notification: {
                title: 'Title of your push notification', 
                body: 'Body of your push notification' 
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