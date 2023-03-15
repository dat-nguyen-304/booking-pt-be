import db from "../models/index";
import NotificationService from "../services/NotificationService";
const { Op } = require('sequelize');
const getAll = async (query) => {
    try {
        let { keyword, limit, page, traineePackageId, rating, date, traineeId, slotId, PTId, centerId, sortBy, order } = query;

        if (PTId && centerId) {
            return {
                errorCode: 1,
                message: `'PTId' and 'centerId' can not have value at the same time`
            }
        }

        const options = { raw: true };

        const properties = [];
        if (traineePackageId) properties.push('traineePackageId');
        if (rating) properties.push('rating');
        if (date) properties.push('date');
        if (traineeId) properties.push('traineeId');
        if (slotId) properties.push('slotId');
        if (PTId) properties.push('PTId');
        if (centerId) properties.push('centerId');

        properties.forEach(property => {
            options.where = {
                ...options.where,
                [property]: query[property]
            }
        })

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

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        const sessions = await db.Session.findAndCountAll({
            ...options,
            raw: true,
            include: [
                { model: db.TraineePackage, as: 'traineePackage' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'slotId', 'PTId', 'traineePackageId', 'centerId'],
            },
            nest: true
        });
        return {
            errorCode: 0,
            totalItems: sessions.count,
            totalPage: Math.ceil(sessions.count / options.limit),
            sessions: sessions.rows
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const session = await db.Session.findOne({
            where: { sessionId: id },
            include: [
                { model: db.TraineePackage, as: 'traineePackage' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'slotId', 'PTId', 'traineePackageId', 'centerId'],
            },
            nest: true,
            raw: true
        });
        if (!session) return {
            errorCode: 1,
            message: 'Session ID does not exist'
        }
        return {
            errorCode: 0,
            session
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (sessionData) => {
    try {
        const session = await db.Session.create(sessionData);
        await session.reload({
            include: [
                { model: db.TraineePackage, as: 'traineePackage' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'slotId', 'PTId', 'traineePackageId', 'centerId'],
            },
            nest: true
        });
        return {
            errorCode: 0,
            session
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, sessionData) => {
    try {
        const session = await db.Session.findOne({
            where: { sessionId: id },
            include: [
                { model: db.TraineePackage, as: 'traineePackage' },
                { model: db.Trainee, as: 'trainee' },
                { model: db.PT, as: 'PT' },
                { model: db.Slot, as: 'slot' },
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'slotId', 'PTId', 'traineePackageId', 'centerId'],
            },
            nest: true
        });
        if (!session) return {
            errorCode: 1,
            message: 'Session ID does not exist'
        }

        if (session.date.getTime() <= (new Date()).getTime()) return {
            errorCode: 0,
            message: 'You cannot change session information for today and in the past'
        }

        if (!sessionData.noteFromPT || !sessionData.noteFromStudent) {
            const message = {
                title: "Bạn có một thông báo về lớp học",
                message: "Bạn nhận được một note từ PT"
            }
            await NotificationService.postNotification(1, message);
        }
        await session.update(sessionData);
        return {
            errorCode: 0,
            session
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, getById, update, create
}