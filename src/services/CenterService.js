import db from "../models/index";
import imgUrl from "../utils/GetImgLink";
import deleteUrl from "../utils/DeleteImgLink"
import { redisClient } from "../config/connectDB";
import checkNotify from "../utils/checkNoti";

const getAllCenter = async () => {
    let isCached = false;
    let centers
    try {
        const cacheResults = await redisClient.get("centers");
        if (cacheResults) {
            console.log("chạy vo vi da co data");
            isCached = true;
            centers = JSON.parse(cacheResults);
        } else {
            centers = await db.Center.findAll({
                where: { activate: true },
                raw: true
            });
            if (centers.length === 0) {
                throw "API returned an empty array";
            }
            await redisClient.set("centers", JSON.stringify(centers));
        }
        checkNotify();
        return {
            errorCode: 0,
            centers
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const postNewCenter = async ({ centerData, file }) => {
    try {
        const imgLink = await imgUrl(file, "users");
        if (!imgLink) return {
            errorCode: 1,
            message: "File is required"
        }
        const center = await db.Center.create({
            ...centerData,
            imgLink
        });
        redisClient.del('centers');
        return {
            errorCode: 0,
            center,
        };
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
            message: 'Center ID does not exist'
        }
        redisClient.del('centers');
        return {
            errorCode: 0,
            center
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, centerData, file) => {
    try {
        if (typeof file != "undefined") {
            const imgLink = await imgUrl(file, "users");
            if (!imgLink) return {
                errorCode: 1,
                message: "File is required"
            }
            centerData.imgLink = imgLink;
        }
        const centerFound = await db.Center.findOne({
            where: { centerId: id }
        });
        if (!centerFound) return {
            errorCode: 1,
            message: 'Center ID does not exist'
        }

        await centerFound.update(centerData);
        return {
            errorCode: 0,
            center: centerFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const toggleActivate = async (id) => {
    try {
        const centerFound = await db.Center.findOne({
            where: { centerId: id }
        });
        if (!centerFound) return {
            errorCode: 1,
            message: 'Center ID does not exist'
        }
        await centerFound.update({ activate: !centerFound.activate });
        return {
            errorCode: 0,
            center: centerFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllCenter, getCenterById, postNewCenter, update, toggleActivate
}