import PTService from "../services/PTService";

const getAll = async (req, res) => {
    try {
        let response = await PTService.getAll(req.query);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server.",
        });
    }
};

const getById = async (req, res) => {
    try {
        let response = await PTService.getById(req.params.PTId);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server.",
        });
    }
};

const create = async (req, res) => {
    try {
        let response = await PTService.create(req.body, req.file);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server.'
        })
    }
}

const update = async (req, res) => {
    try {
        let response = await PTService.update(req.params.PTId, req.body, req.file);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server.'
        })
    }
}

module.exports = { getAll, getById, create, update };
