const jwt = require('jsonwebtoken');
const verifyAccessToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
        console.log(decoded);
        req.email = decoded.email;
        req.role = decoded.role;
        next();
    } catch (e) {
        console.log(e);
        return res.sendStatus(403);
    }
}

module.exports = verifyAccessToken;