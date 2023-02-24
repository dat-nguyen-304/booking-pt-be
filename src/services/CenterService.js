import db from "../models/index";
import imgUrl from "../utils/GetImgLink";
import deleteUrl from "../utils/DeleteImgLink"
import {redisClient} from "../config/connectDB";

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

const deleteCenterById = async (id) => {
    try {
        const centerRes = await getCenterById(id);
        const deleted = deleteUrl(centerRes.center.imgLink, "users");
        if (deleted) {
            console.log("đã xóa");
        } else {
            console.log("chưa xóa")
        }
        const center = await db.Center.destroy({
            where: { centerId: id },
            raw: true
        });
        if (!center) return {
            errorCode: 1,
            description: 'centerId is not exist'
        }
        return {
            errorCode: 0,
            description: 'Center has been successfully deleted'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllCenter, getCenterById, postNewCenter, deleteCenterById
}