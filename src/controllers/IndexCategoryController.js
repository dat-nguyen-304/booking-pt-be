import IndexCategoryService from "../services/IndexCategoryService";

const getAll = async (req, res) => {
    try {
        let response = await IndexCategoryService.getAll();
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
        let response = await IndexCategoryService.create(req.body);
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
        let response = await IndexCategoryService.update(req.params.indexCategoryId, req.body);
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
        let response = await IndexCategoryService.deleteById(req.params.indexCategoryId);
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
