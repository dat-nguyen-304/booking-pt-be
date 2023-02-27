import db from "../models/index";

const getAll = async () => {
    try {
        const PTs = await db.PT.findAll({
            include: [{ model: db.Center, as: 'center' }],
            raw: true,
            nest: true,
        });
        return {
            errorCode: 0,
            PTs
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const PT = await db.PT.findOne({
            where: { PTId: id },
            include: [{ model: db.Center, as: 'center' }],
            raw: true,
            nest: true,
        });
        if (!PT) return {
            errorCode: 1,
            description: 'PT Id is not exist'
        }
        return {
            errorCode: 0,
            PT
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, PTData) => {
    try {
        const PT = await db.PT.findOne({
            where: { PTId: id },
            include: [{ model: db.Center, as: 'center' }],
            raw: true,
            nest: true,
        });
        if (!PT) return {
            errorCode: 1,
            description: 'PTId is not exist'
        }
        await PT.update(PTData);
        return {
            errorCode: 0,
            PT
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, getById, update
}