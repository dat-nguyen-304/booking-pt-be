import db from "../models/index";

const getAll = async () => {
    try {
        const slots = await db.Slot.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            slots
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (slots) => {
    try {
        const slot = await db.Slot.create(slots);
        return {
            errorCode: 0,
            slot
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, slotData) => {
    try {
        const slot = await db.Slot.findOne({
            where: { slotId: id }
        });
        if (!slot) return {
            errorCode: 1,
            description: 'slotId is not exist'
        }
        await slot.update(slotData);
        return {
            errorCode: 0,
            slot
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const slotFound = await db.Slot.findOne({
            where: { slotId: id }
        });
        if (!slotFound) return {
            errorCode: 1,
            description: 'slotId is not exist'
        }
        await slotFound.destroy();
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
    getAll, create, update, deleteById
}