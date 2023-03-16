import db from "../models/index";
import imgUrl from "../utils/GetImgLink";
import deleteUrl from "../utils/DeleteImgLink";
import NotificationService from "../services/NotificationService";
import { checkExist } from "./commonService";

const getAll = async (query) => {
    try {
        let { limit, page, sessionId, sortBy, order } = query;

        const options = { raw: true };

        const properties = [];
        if (sessionId) properties.push('sessionId');

        properties.forEach(property => {
            options.where = {
                ...options.where,
                [property]: query[property]
            }
        })

        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        const images = await db.Image.findAndCountAll({
            ...options,
            raw: true,
            include: [{ model: db.Session, as: 'session' }],
            attributes: {
                exclude: ['sessionId'],
            },
            nest: true
        });
        return {
            errorCode: 0,
            totalItems: images.count,
            totalPage: Math.ceil(images.count / options.limit),
            sessions: images.rows
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const postNew = async ({ imageData, files }) => {
    try {
        const notExistSession = await checkExist("Session", { sessionId: imageData.sessionId });
        if (notExistSession) return notExistSession;
        
        var array = {};
        var i = 0;
        for (const file of files) {
            const imgLink = await imgUrl(file, "images");
            if (!imgLink) return {
                errorCode: 1,
                message: "File is required"
            }
            const image = await db.Image.create({
                ...imageData,
                imgLink
            });
            var name = "file";
            array[name + i] = image.dataValues;
            i++;
        }
        const message = {
            title: "Bạn có một thông báo về lớp học",
            message: "PT vừa cập nhật ảnh của bạn trong buổi học"
        }
        await NotificationService.postNotification(1, message);
        return {
            errorCode: 0,
            array,
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const image = await db.Image.findOne({
            where: { imageId: id },
            include: [{ model: db.Session, as: 'session' }],
            attributes: {
                exclude: ['sessionId'],
            },
            nest: true,
            raw: true
        });
        if (!image) return {
            errorCode: 1,
            message: 'Image ID does not exist'
        }
        return {
            errorCode: 0,
            image
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const imageRes = await getById(id);
        const deleted = deleteUrl(imageRes.image.imgLink, "image");
        if (deleted) {
            console.log("đã xóa");
        } else {
            console.log("chưa xóa")
        }
        const image = await db.Image.destroy({
            where: { imageId: id },
            raw: true
        });
        if (!image) return {
            errorCode: 1,
            message: 'Image ID does not exist'
        }
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
    getAll, getById, postNew, deleteById
}