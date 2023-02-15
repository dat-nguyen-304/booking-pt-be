const verifyAuthorization = (requiredRole) => {
    return (req, res, next) => {
        try {
            const verified = requiredRole.includes(req.role);
            if (verified)
                next();
            else res.status(401).json({
                errorCode: 1,
                message: "Unauthorized"
            })
        } catch (e) {
            console.log(e);
            return res.status(403).json({
                errCode: -1,
                message: e.message
            });
        }
    }
}

module.exports = verifyAuthorization;