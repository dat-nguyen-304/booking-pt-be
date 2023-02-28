const admin = require('../config/firebase-config');

const verifyGoogleToken = async (req, res, next) => {
    if (!req.headers.authorization)
        return res.status(401).json({
            errorCode: 1,
            message: 'Token is required'
        });
    const token = req.headers.authorization.split(' ').length === 2 && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({
        errorCode: 1,
        message: 'Token is required'
    });

    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (decodeValue) {
            req.email = decodeValue.email;
            req.emailName = decodeValue.name;
            return next();
        }
    } catch (e) {
        if (e.code === 'auth/id-token-expired') {
            return res.status(401).json({
                errorCode: -1,
                message: 'Google Token expired'
            });
        } else if (e.code === 'auth/id-token-revoked' || e.code === 'auth/invalid-id-token') {
            return res.status(401).json({
                errorCode: -1,
                message: 'Invalid Google token'
            });
        } else {
            console.log(e);
            return res.status(403).json({
                errorCode: -1,
                message: 'Unauthenticated'
            });
        }
    }
}


export default verifyGoogleToken;