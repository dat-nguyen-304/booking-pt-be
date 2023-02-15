const jwt = require('jsonwebtoken');
const verifyAccessToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({
        errCode: 1,
        message: 'Token is required'
    });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
        req.email = decoded.email;
        req.role = decoded.role;
        next();
    } catch (e) {
        if (e.message === 'jwt expired') {
            return res.status(401).json({
                errCode: -1,
                message: 'Token has expired'
            });
        } else {
            return res.status(401).json({
                errCode: -1,
                message: 'Token is invalid'
            });
        }
    }
}

module.exports = verifyAccessToken;