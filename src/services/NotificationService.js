var admin = require("firebase-admin");
const FCM = require('fcm-node')
var serviceAccount = require("../config/serviceAccount.json");
var fcm = new FCM(serviceAccount)

const postNotification = async (notifyData) => {
    console.log(notifyData);
    try {
        var message = {
            to: 'eRziEvVAQSqFtwCjbTOgbe:APA91bE0CPoK6UNLsdUEjdsl-a5GpWpkxsbiN9sqKirgc2GpvRBlZmsVlPFJMq1VoXYxWwkuIU0EL6ujltW5pG-pGyc0Y6mKXUXXVZOK_DQO_4Yhd0yGjEgpoJ6KI093VHGDI0JlGhKn', 
            
            notification: {
                title: notifyData.title, 
                body: notifyData.content, 
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