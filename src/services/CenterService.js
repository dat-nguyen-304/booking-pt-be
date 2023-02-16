import db from "../models/index";
const getAllCenter = async () => {
    try {
        const centers = await db.Center.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            centers
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const postNewCenter = async (newCenter) => {
    try {
        console.log(newCenter);
        const center = await db.Center.create(newCenter);
        return {
            errorCode: 0,
            center
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getCenterById = async (id) => {
    try {
        const center = await db.Center.findOne({
            where: { centerId: id },
            raw: true
        });
        if (!center) return {
            errorCode: 1,
            description: 'centerId is not exist'
        }
        return {
            errorCode: 0,
            center
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllCenter, getCenterById,postNewCenter
}