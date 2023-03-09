import MeasureService from "../services/MeasureService";

const getAll = async (req, res) => {
    try {
        let response = await MeasureService.getAll(req.query);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(500).json(response);
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
        let response = await MeasureService.create(req.body);
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
        let response = await MeasureService.update(req.params.measureId, req.body);
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
        let response = await MeasureService.deleteById(req.params.measureId);
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
