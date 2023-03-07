import db from "../models/index";
const getAll = async () => {
    try {
        const sessions = await db.Session.findAll({
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
            sessions
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