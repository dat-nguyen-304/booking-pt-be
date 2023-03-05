import db from "../models/index";
import {redisClient} from "../config/connectDB";
const getAll = async () => {
    let isCached = false;
    let PTs
    try {
        const cacheResults = await redisClient.get("PTs");
        if (cacheResults) {
            console.log("chạy vo vi da co data");
            isCached = true;
            PTs = JSON.parse(cacheResults);
        } else {
            PTs = await db.PT.findAll({
                include: [{ model: db.Center, as: 'center' }],
                raw: true,
                nest: true,
            });
            if (PTs.length === 0) {
                throw "API returned an empty array";
            }
            await redisClient.set("PTs", JSON.stringify(PTs));
        }
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
        redisClient.del('PTs');
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