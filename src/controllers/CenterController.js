import CenterService from "../services/CenterService";

const getAllCenter = async (req, res) => {
    try {
        let response = await CenterService.getAllCenter();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: "Error from server...",
        });
    }
};

const postNewCenter = async (req, res) => {
    try {
        let response = await CenterService.postNewCenter({ centerData: req.body, file: req.file });
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
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
            errCode: -1,
            message: "Error from server...",
        });
    }
};

const deleteCenterById = async (req, res) => {
    try {
        let response = await CenterService.deleteCenterById(req.params.centerId);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: "Error from server...",
        });
    }
};
module.exports = { getAllCenter, getCenterById, postNewCenter, deleteCenterById };
