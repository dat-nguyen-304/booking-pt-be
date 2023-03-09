import CenterService from "../services/CenterService";

const getAllCenter = async (req, res) => {
    try {
        let response = await CenterService.getAllCenter();
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

const postNewCenter = async (req, res) => {
    try {
        let response = await CenterService.postNewCenter({ centerData: req.body, file: req.file });
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

const getCenterById = async (req, res) => {
    try {
        let response = await CenterService.getCenterById(req.params.centerId);
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

const updateOrToggleActivate = async (req, res) => {
    try {
        const { operation, ...centerData } = req.body;
        console.log("req", req.body);
        let response;
        if (operation === 'update')
            response = await CenterService.update(req.params.centerId, centerData, req.file);
        else if (operation === 'toggleActivate')
            response = await CenterService.toggleActivate(req.params.centerId);
        else return res.status(400).json({
            errorCode: 1,
            message: `operation must be 'update' or 'toggleActivate'`
        });
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

module.exports = { getAllCenter, getCenterById, postNewCenter, updateOrToggleActivate };
