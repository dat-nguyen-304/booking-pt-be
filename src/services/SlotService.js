import db from "../models/index";

const getAll = async () => {
    try {
        const slots = await db.Slot.findAll({
            where: { activate: true },
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
            message: 'Slot ID does not exist'
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

const deactivate = async (id) => {
    try {
        const slotFound = await db.Slot.findOne({
            where: { slotId: id }
        });
        if (!slotFound) return {
            errorCode: 1,
            message: 'Slot does not exist'
        }
        await slotFound.update({ activate: false });
        return {
            errorCode: 0,
            slot: slotFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, create, update, deactivate
}