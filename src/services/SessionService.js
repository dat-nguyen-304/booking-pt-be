import db from "../models/index";
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
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'PTId', 'traineePackageId', 'centerId'],
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
            raw: true
        });
        if (!session) return {
            errorCode: 1,
            description: 'Session Id is not exist'
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
                { model: db.Center, as: 'center' }
            ],
            attributes: {
                exclude: ['traineeId', 'PTId', 'traineePackageId', 'centerId'],
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
            where: { sessionId: id }
        });
        if (!session) return {
            errorCode: 1,
            description: 'SessionId is not exist'
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