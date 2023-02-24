const verifyAuthorization = (requiredRole) => {
    return (req, res, next) => {
        try {
            const verified = requiredRole.includes(req.role);
            if (verified)
                next();
            else res.status(403).json({
                errorCode: 1,
                message: "Forbidden"
            })
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errorCode: -1,
                message: 'Error from server'
            });
        }
    }
}

module.exports = verifyAuthorization;