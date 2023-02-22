import PackageService from "../services/PackageService";
const getAllPackage = async (req, res) => {
    try {
        let response = await PackageService.getAllPackage();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

const getPackageById = async (req, res) => {
    try {
        let response = await PackageService.getPackageById(req.params.packageId);
        if (response.errorCode === 0)
            return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = { getAllPackage, getPackageById }