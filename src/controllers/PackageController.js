import PackageService from "../services/PackageService";
const getAllPackage = async (req, res) => {
    try {
        let response = await PackageService.getAllPackage(req.query);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
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
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

const create = async (req, res) => {
    try {
        console.log("REQ.BODY: ", req.body);
        let response = await PackageService.create(req.body);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

const updateOrToggleActivate = async (req, res) => {
    try {
        const { operation, ...packageData } = req.body;
        let response;
        if (operation === 'update')
            response = await PackageService.update(req.params.packageId, packageData);
        else if (operation === 'toggleActivate')
            response = await PackageService.toggleActivate(req.params.packageId);
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
        let response = await PackageService.deleteById(req.params.packageId);
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


module.exports = { getAllPackage, getPackageById, create, updateOrToggleActivate, deleteById }