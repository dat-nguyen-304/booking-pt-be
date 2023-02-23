import db from "../models/index";
const getAll = async () => {
    try {
        const PTs = await db.PT.findAll({
            raw: true
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
        const PTFound = await db.PT.findOne({
            where: { PTId: id },
            raw: true
        });
        if (!PTFound) return {
            errorCode: 1,
            description: 'PT Id is not exist'
        }
        return {
            errorCode: 0,
            PT: PTFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, PTData) => {
    try {
        const PTFound = await db.PT.findOne({
            where: { PTId: id }
        });
        if (!PTFound) return {
            errorCode: 1,
            description: 'PTId is not exist'
        }
        await PTFound.update(PTData);
        return {
            errorCode: 0,
            PT: PTFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const PTFound = await db.PT.findOne({
            where: { PTId: id }
        });
        if (!PTFound) return {
            errorCode: 1,
            description: 'PT Id is not exist'
        }

        await PTFound.destroy();
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
    getAll, getById, update, deleteById
}