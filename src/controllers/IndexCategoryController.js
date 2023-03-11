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
            message: "Error from server.",
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
            message: "Error from server.",
        });
    }
};

const updateOrToggleActivate = async (req, res) => {
    try {
        const { operation, ...indexCategoryData } = req.body;
        let response;
        if (operation === 'update')
            response = await IndexCategoryService.update(req.params.indexCategoryId, indexCategoryData);
        else if (operation === 'toggleActivate')
            response = await IndexCategoryService.toggleActivate(req.params.indexCategoryId);
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
            message: 'Error from server.'
        })
    }
}

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
            message: "Error from server.",
        });
    }
};

module.exports = { getAll, create, updateOrToggleActivate, deleteById };
