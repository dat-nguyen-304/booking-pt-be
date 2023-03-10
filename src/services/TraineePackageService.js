import db from "../models/index";
const { Op } = require('sequelize');
import NotificationService from "../services/NotificationService";

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
                { model: db.Center, as: 'mainCenter' },
                { model: db.PT, as: 'mainPT' },
                { model: db.Slot, as: 'mainSlot' },
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
            include: [
                { model: db.Center, as: 'mainCenter' },
                { model: db.PT, as: 'mainPT' },
                { model: db.Slot, as: 'mainSlot' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.Package, as: 'package' },
                { model: db.Payment, as: 'payment' },
            ],
            attributes: {
                exclude: ['mainPTId', 'mainSlotId', 'mainCenterId', 'traineeId', 'packageId', 'paymentId']
            },
            nest: true,
            raw: true
        });
        if (!traineePackage) return {
            errorCode: 1,
            message: 'Trainee Package ID does not exist'
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
        const traineePackageFound = await db.TraineePackage.findOne({
            where: { traineeId: traineePackageData.traineeId, status: 'active' }
        });
        if (traineePackageFound) return {
            errorCode: 0,
            message: `Can't register for this package because your current package is still valid`
        }
        traineePackageData = {
            ...traineePackageData,
            startDate: new Date(Number.parseInt(traineePackageData.startDate) * 1000)
        }
        let traineePackage = await db.TraineePackage.create(traineePackageData);
        traineePackage = await db.TraineePackage.findOne({
            where: { traineePackageId: traineePackage.traineePackageId },
            include: [
                { model: db.Center, as: 'mainCenter' },
                { model: db.PT, as: 'mainPT' },
                { model: db.Slot, as: 'mainSlot' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.Package, as: 'package' },
                { model: db.Payment, as: 'payment' },
            ],
            attributes: {
                exclude: ['mainPTId', 'mainSlotId', 'mainCenterId', 'traineeId', 'packageId', 'paymentId'],
            },
            nest: true
        })

        if (traineePackage.package.category === 'havept') {
            let startDate = traineePackage.startDate;
            startDate.setHours(0);
            startDate.setMinutes(0);
            startDate.setSeconds(0);
            startDate.setMilliseconds(0);

            const message = {
                title: "Ch??c m???ng " + traineePackage.trainee.fullName + " ???? mua th??nh c??ng kh??a h???c",
                message: "B???n ???? mua " + traineePackage.package.packageName + " c???a " + traineePackage.mainPT.fullName + " t???i slot " + traineePackage.mainSlot.slotTime,
            }
            await NotificationService.postNotification(1, message);

            for (let day = 0; day < traineePackage.remainDay; day++) {
                const dateTimestamp = startDate.getTime() + day * 86400 * 1000;
                const date = new Date(dateTimestamp);
                const dayOfWeek = date.getDay();
                if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                    await db.Session.create({
                        traineePackageId: traineePackage.traineePackageId,
                        PTId: traineePackage.mainPT.PTId,
                        slotId: traineePackage.mainSlot.slotId,
                        date
                    });
                }
            }
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

const update = async (id, traineePackageData) => {
    try {
        const traineePackage = await db.TraineePackage.findOne({
            where: { traineePackageId: id },
            include: [
                { model: db.Center, as: 'mainCenter' },
                { model: db.PT, as: 'mainPT' },
                { model: db.Slot, as: 'mainSlot' },
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
            message: 'Trainee Package ID does not exist'
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
            message: 'Trainee Package ID does not exist'
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
                errorCode: 0,
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