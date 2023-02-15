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
        console.log(e);
        return res.sendStatus(403);
    }
}

module.exports = verifyRefreshToken;