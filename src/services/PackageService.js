import db from "../models/index";
const getAllPackage = async () => {
    try {
        const packages = await db.Package.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            packages
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getPackageById = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id },
            raw: true
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, packageData) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        await packageFound.update(packageData);
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const toggleActivate = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        await packageFound.update({ activate: !packageFound.activate });
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }

        await packageFound.destroy();
        return {
            errorCode: 0,
            message: 'success'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllPackage, getPackageById, update, toggleActivate, deleteById
}