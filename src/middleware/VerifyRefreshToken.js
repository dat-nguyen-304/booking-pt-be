const jwt = require('jsonwebtoken');
const verifyRefreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
        console.log(decoded);
        req.email = decoded.email;
        req.role = decoded.role;
        next();
    } catch (e) {
        if (e.message === 'jwt expired') {
            return res.status(401).json({ message: 'Token has expired' });
        } else {
            return res.status(401).json({ message: 'Token is invalid' });
        }
    }
}

module.exports = verifyRefreshToken;