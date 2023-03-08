import SessionService from "../services/SessionService";

const getAll = async (req, res) => {
    try {
        let response = await SessionService.getAll(req.query);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(500).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: e.json(e)
        });
    }
};

const getById = async (req, res) => {
    try {
        let response = await SessionService.getById(req.params.sessionId);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

const create = async (req, res) => {
    try {
        let response = await SessionService.create(req.body);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
}

const update = async (req, res) => {
    try {
        const { operation, ...sessionData } = req.body;
        let response = await SessionService.update(req.params.sessionId, sessionData);
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

module.exports = { getAll, getById, update, create };
