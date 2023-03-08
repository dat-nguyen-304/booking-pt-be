import db from "../models/index";
import imgUrl from "../utils/GetImgLink";
import deleteUrl from "../utils/DeleteImgLink"

const getAll = async (query) => {
    try {
        const images = await db.Image.findAll({
            include: [{ model: db.Session, as: 'session' }],
            raw: true,
            nest: true,
        });
        return {
            errorCode: 0,
            images
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const postNew = async ({ imageData, files }) => {
    try {
        var array ={}; 
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
            raw: true
        });
        if (!image) return {
            errorCode: 1,
            description: 'imageId is not exist'
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
            description: 'imageId is not exist'
        }
        return {
            errorCode: 0,
            description: ' has been successfully deleted'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, getById, postNew, deleteById
}