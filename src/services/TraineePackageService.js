import db from "../models/index";
const { Op } = require('sequelize');

const getAll = async (query) => {
    try {
        let { keyword, limit, page, sortBy, order, getBy, getByValue } = query;

        const options = { raw: true };

        if (keyword) {
            options.where = {
                traineeId: {
                    [Op.like]: `%${keyword}%`
                }
            }
        }

        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }

        if (getBy && getByValue) {
            options.where = { ...options.where, [getBy]: getByValue }
        }

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        const traineePackages = await db.TraineePackage.findAndCountAll(options);

        return {
            errorCode: 0,
            totalItems: traineePackages.count,
            totalPage: Math.ceil(traineePackages.count / options.limit),
            traineePackages: traineePackages.rows
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
        const traineePackageFound = await db.TraineePackage.findOne({
            where: { traineePackageId: id }
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
        const traineePackageFound = await db.TraineePackage.findOne({
            where: { traineePackageId: id }
        });

        if (!traineePackageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        const sessionFound = await db.Session.findOne({
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