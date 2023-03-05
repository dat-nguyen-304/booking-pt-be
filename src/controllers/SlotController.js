import SlotService from "../services/SlotService";

const getAll = async (req, res) => {
    try {
        let response = await SlotService.getAll();
        return res.status(200).json(response);
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
        let response = await SlotService.create(req.body);
        return res.status(200).json(response);
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
        let response = await SlotService.update(req.params.slotId, req.body);
        return res.status(200).json(response);
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
        let response = await SlotService.deleteById(req.params.slotId);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

module.exports = { getAll, create, update, deleteById };
