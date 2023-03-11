import TraineeService from "../services/TraineeService";

const getAll = async (req, res) => {
    try {
        let response = await TraineeService.getAll();
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
        let response = await TraineeService.getById(req.params.traineeId);
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

const update = async (req, res) => {
    try {
        let response = await TraineeService.update(req.params.traineeId, req.body);
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


module.exports = { getAll, getById, update };
