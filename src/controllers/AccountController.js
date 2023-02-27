import AccountService from "../services/AccountService";
const getAllAccount = async (req, res) => {
    try {
        let response = await AccountService.getAllAccount(req.query);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

const getAccountById = async (req, res) => {
    try {
        let response = await AccountService.getAccountById(req.params.centerId);
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

module.exports = { getAllAccount, getAccountById }