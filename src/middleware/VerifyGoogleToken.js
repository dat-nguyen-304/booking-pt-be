const admin = require('../config/firebase-config');

const verifyGoogleToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (decodeValue) {
            req.email = decodeValue.email;
            req.emailName = decodeValue.name;
            return next();
        }
        return res.json({ message: 'Unauthorize' });
    } catch (e) {
        return res.json({ message: 'Internal Error' });
    }
}


export default verifyGoogleToken;