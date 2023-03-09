import AuthService from "../services/AuthService";
const login = async (req, res) => {
    try {
        let response = await AuthService.login(req.email, req.emailName);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

const getTokens = async (req, res) => {
    try {
        let response = await AuthService.getTokens({ email: req.email, role: req.role, accountId: req.accountId });
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = { login, getTokens }