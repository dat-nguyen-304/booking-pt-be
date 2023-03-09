import SlotService from "../services/SlotService";

const getAll = async (req, res) => {
    try {
        let response = await SlotService.getAll();
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
        let response = await SlotService.create(req.body);
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

const updateOrDeactivate = async (req, res) => {
    try {
        const { operation, ...slotData } = req.body;
        let response;
        if (operation === 'update')
            response = await SlotService.update(req.params.slotId, slotData);
        else if (operation === 'deactivate')
            response = await SlotService.deactivate(req.params.slotId);
        else return res.status(400).json({
            errorCode: 1,
            message: `operation must be 'update' or 'deactivate'`
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

module.exports = { getAll, create, updateOrDeactivate };
