import PackageCategoryService from "../services/PackageCategoryService";
const getAllPackageCategory = async (req, res) => {
    try {
        let response = await PackageCategoryService.getAllPackageCategory();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

const getPackageCategoryById = async (req, res) => {
    try {
        let response = await PackageCategoryService.getPackageCategoryById(req.params.packageCategoryId);
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

module.exports = { getAllPackageCategory, getPackageCategoryById }