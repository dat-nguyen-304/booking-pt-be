import IndexService from "../services/IndexService";

const getAll = async (req, res) => {
    try {
        let response = await IndexService.getAll();
        if (response.errorCode === 0)
            return res.status(200).json(response);
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
        let response = await IndexService.create(req.body);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

const update = async (req, res) => {
    try {
        let response = await IndexService.update(req.params.indexId, req.body);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

const deleteById = async (req, res) => {
    try {
        let response = await IndexService.deleteById(req.params.indexId);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

module.exports = { getAll, create, update, deleteById };
