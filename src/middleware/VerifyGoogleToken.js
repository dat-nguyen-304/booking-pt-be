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
    } catch (e) {
        if (error.code === 'auth/id-token-expired') {
            return res.status(401).json({
                errCode: -1,
                message: 'Google Token expired'
            });
        } else if (error.code === 'auth/id-token-revoked' || error.code === 'auth/invalid-id-token') {
            return res.status(401).json({
                errCode: -1,
                message: 'Invalid Google token'
            });
        } else {
            return res.status(403).json({
                errCode: -1,
                message: 'Unauthenticated'
            });
        }
    }
}


export default verifyGoogleToken;