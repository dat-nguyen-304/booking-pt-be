import db from "../models/index";
const { Op } = require('sequelize');

const getAll = async (query) => {
    try {
        let { limit, page, mainPTId, mainSlotId, mainCenterId, traineeId, packageId, paymentId, status, sortBy, order } = query;

        if (mainPTId && mainCenterId) {
            return {
                errorCode: 1,
                message: `'mainPTId' and 'mainCenterId' can not have value at the same time`
            }
        }
        const options = { raw: true };

        const properties = [];
        if (mainPTId) properties.push('mainPTId');
        if (mainSlotId) properties.push('mainSlotId');
        if (mainCenterId) properties.push('mainCenterId');
        if (traineeId) properties.push('traineeId');
        if (packageId) properties.push('packageId');
        if (paymentId) properties.push('paymentId');
        if (status) properties.push('status');

        properties.forEach(property => {
            options.where = {
                ...options.where,
                [property]: query[property]
            }
        })

        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        const traineePackages = await db.TraineePackage.findAndCountAll({
            ...options,
            include: [
                { model: db.Center, as: 'center' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.Package, as: 'package' },
                { model: db.Payment, as: 'payment' },
            ],
            attributes: {
                exclude: ['mainPTId', 'mainSlotId', 'mainCenterId', 'traineeId', 'packageId', 'paymentId']
            },
            nest: true
        });

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
        traineePackageData = {
            ...traineePackageData,
            startDate: new Date(Number.parseInt(traineePackageData.startDate) * 1000)
        }
        const traineePackage = await db.TraineePackage.create(traineePackageData);
        await traineePackage.reload({
            include: [
                { model: db.Center, as: 'center' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.Package, as: 'package' },
                { model: db.Payment, as: 'payment' },
            ],
            attributes: {
                exclude: ['mainPTId', 'mainSlotId', 'mainCenterId', 'traineeId', 'packageId', 'paymentId'],
            },
            nest: true
        });
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
            where: { traineePackageId: id },
            include: [
                { model: db.Center, as: 'center' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.Package, as: 'package' },
                { model: db.Payment, as: 'payment' },
            ],
            attributes: {
                exclude: ['mainPTId', 'mainSlotId', 'mainCenterId', 'traineeId', 'packageId', 'paymentId'],
            },
            nest: true
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

const deleteById = async (id) => {
    try {
        const traineePackageFound = await db.TraineePackage.findOne({
            where: { traineePackageId: id }
        });

        if (!traineePackageFound) return {
            errorCode: 1,
            description: 'traineePackageId is not exist'
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
    getAll, getById, update, create, deleteById
}