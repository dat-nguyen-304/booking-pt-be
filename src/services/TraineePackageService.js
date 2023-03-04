import db from "../models/index";
const getAll = async () => {
    try {
        const traineePackages = await db.TraineePackage.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            traineePackages
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const traineePackage = await db.TraineePackage.findOne({
            where: { traineePackageId: id },
            raw: true
        });
        if (!traineePackage) return {
            errorCode: 1,
            description: 'TraineePackage Id is not exist'
        }
        return {
            errorCode: 0,
            traineePackage
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (traineePackageData) => {
    try {
        const traineePackage = await db.TraineePackage.create(traineePackageData);
        return {
            errorCode: 0,
            traineePackage
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, traineePackageData) => {
    try {
        const traineePackage = await db.TraineePackage.findOne({
            where: { traineePackageId: id }
        });
        if (!traineePackage) return {
            errorCode: 1,
            description: 'TraineePackageId is not exist'
        }
        await traineePackage.update(traineePackageData);
        return {
            errorCode: 0,
            traineePackage
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const toggleActivate = async (id) => {
    try {
        const traineePackageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!traineePackageFound) return {
            errorCode: 1,
            description: 'TraineePackageId is not exist'
        }
        await traineePackageFound.update({ activate: !traineePackageFound.activate });
        return {
            errorCode: 0,
            traineePackage: traineePackageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const traineePackageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!traineePackageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        const sessionFound = await db.Package.findOne({
            where: { traineePackageId: traineePackageFound.traineePackageId }
        })
        if (!sessionFound) {
            await traineePackageFound.destroy();
            return {
                errorCode: 0,
                message: 'success'
            }
        } else {
            return {
                errorCode: 1,
                message: 'Can not delete this trainee package because of existing session'
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, getById, update, create, toggleActivate, deleteById
}