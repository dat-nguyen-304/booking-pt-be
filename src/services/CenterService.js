import db from "../models/index";
const { Storage } = require("@google-cloud/storage");
import imgUrl from "../utils/GetImgLink";
const UUID = require("uuid-v4");
const os = require("os");
const tempDir = os.tmpdir()
const storage = new Storage({
    keyFilename: "../booking-pt-be/src/config/serviceAccount.json",
});
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

module.exports = {
    getAllCenter, getCenterById, postNewCenter
}