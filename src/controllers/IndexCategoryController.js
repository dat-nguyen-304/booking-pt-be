import IndexCategoryService from "../services/IndexCategoryService";

const getAll = async (req, res) => {
    try {
        let response = await IndexCategoryService.getAll();
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
        let response = await IndexCategoryService.create(req.body);
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
        let response = await IndexCategoryService.update(req.params.indexCategoryId, req.body);
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
        let response = await IndexCategoryService.deleteById(req.params.indexCategoryId);
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
