import db from "../models/index";
import { redisClient } from "../config/connectDB";
import imgUrl from "../utils/GetImgLink";
const { Op } = require("sequelize");

const getAll = async (query) => {
    let isCached = false;
    let PTs;
    let { keyword, limit, page, centerId, rating, sortBy, order } = query;

    const options = {
        include: [{ model: db.Center, as: "center" }],
        raw: true,
        nest: true,
    };

    if (centerId) {
        options.where = {
            ...options.where,
            centerId,
        };
    }
    if (rating) {
        options.where = {
            ...options.where,
            rating: { [Op.gte]: rating },
        };
    }

    if (keyword) {
        options.where = {
            fullName: {
                [Op.like]: `%${keyword}%`,
            },
        };
    }

    if (page) {
        options.page = Number.parseInt(page);
        options.limit = Number.parseInt(limit) || 10;
        options.offset = (page - 1) * options.limit;
    }

    if (sortBy) {
        order = order || "asc";
        options.order = [[sortBy, order]];
    }

    try {
        if (JSON.stringify(query) === "{}") {
            const cacheResults = await redisClient.get("PTs");
            if (cacheResults) {
                console.log("chạy vo vi da co data");
                isCached = true;
                PTs = JSON.parse(cacheResults);
            } else {
                PTs = await db.PT.findAndCountAll(options);

                if (PTs.length === 0) {
                    throw "API returned an empty array";
                }
                await redisClient.set("PTs", JSON.stringify(PTs));
            }
        } else {
            PTs = await db.PT.findAndCountAll(options);
            console.log("pt", options);
        }
        return {
            errorCode: 0,
            totalItems: PTs.count,
            totalPage: Math.ceil(PTs.count / options.limit),
            PTs: PTs.rows,
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

// const getById = async (id) => {
//     try {
//         const PT = await db.PT.findOne({
//             where: { PTId: id },
//             include: [{ model: db.Center, as: 'center' }],
//             raw: true,
//             nest: true,
//         });
//         if (!PT) return {
//             errorCode: 1,
//             description: 'PT Id is not exist'
//         }
//         return {
//             errorCode: 0,
//             PT
//         }
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// }

const getById = async (id) => {
    try {
        const slot = [
            {mainSlotId: 1},
            {mainSlotId: 2},
            {mainSlotId: 3},
            {mainSlotId: 4},
            {mainSlotId: 5},
            {mainSlotId: 6}
          ];
        const PT = await db.PT.findOne({
            where: { PTId: id },
            include: [{ model: db.Center, as: "center" }],
            raw: true,
            nest: true,
        });
        const bookedSlot = await db.TraineePackage.findAll({
            attributes: ['mainSlotId'] ,
            where: { mainPTId: id, remainDay: { [Op.gt]: 0 } },
            raw: true,
        });
        const remainSlot = slot.filter((slot) => !bookedSlot.some((bookedSlot) => bookedSlot.mainSlotId === slot.mainSlotId));
        for (let i = 0; i < remainSlot.length; i++) {
            let objName = "remainSlot";
            if (PT.hasOwnProperty(objName)) {
                PT[objName].push(remainSlot[i]);
              } else {
                PT[objName] = [remainSlot[i]];
              }
        }
        // PtT.remainSlot.forEach(element => {
        //     console.log(element.mainSlotId);
        // });
        if (!PT)
            return {
                errorCode: 1,
                description: "PT Id is not exist",
            };
        return {
            errorCode: 0,
            PT,
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const update = async (id, PTData, file) => {
    try {
        if (typeof file != "undefined") {
            const imgLink = await imgUrl(file, "PTs");
            if (!imgLink)
                return {
                    errorCode: 1,
                    message: "File is required",
                };
            PTData.imgLink = imgLink;
        }
        const PT = await db.PT.findOne({
            where: { PTId: id },
            include: [{ model: db.Center, as: "center" }],
            nest: true,
        });
        if (!PT)
            return {
                errorCode: 1,
                description: "PTId is not exist",
            };
        await PT.update(PTData);
        redisClient.del("PTs");
        return {
            errorCode: 0,
            PT,
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

module.exports = {
    getAll,
    getById,
    update,
};
