import CenterService from "../services/CenterService";
const getAllCenter = async (req, res) => {
    try {
        let response = await CenterService.getAllCenter();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

const getCenterById = async (req, res) => {
    try {
        let response = await CenterService.getCenterById(req.params.centerId);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(404).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = { getAllCenter, getCenterById }