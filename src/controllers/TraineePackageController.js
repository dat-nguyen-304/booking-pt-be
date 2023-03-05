import TraineePackageService from "../services/TraineePackageService";

const getAll = async (req, res) => {
    try {
        let response = await TraineePackageService.getAll(req.query);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

const getById = async (req, res) => {
    try {
        let response = await TraineePackageService.getById(req.params.traineeId);
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
        let response = await TraineePackageService.create(req.body);
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

const updateOrToggleActivate = async (req, res) => {
    try {
        const { operation, ...traineePackageData } = req.body;
        let response;
        if (operation === 'update')
            response = await TraineePackageService.update(req.params.packageId, traineePackageData);
        else if (operation === 'toggleActivate')
            response = await TraineePackageService.toggleActivate(req.params.packageId);
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

const deleteById = async (req, res) => {
    try {
        let response = await TraineePackageService.deleteById(req.params.packageId);
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

module.exports = { getAll, getById, updateOrToggleActivate, create, deleteById };
