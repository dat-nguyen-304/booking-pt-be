import db from "../models/index";

const getAll = async () => {
    try {
        const indexCategories = await db.IndexCategory.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            indexCategories
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (indexCategories) => {
    try {
        const indexCategory = await db.IndexCategory.create(indexCategories);
        return {
            errorCode: 0,
            indexCategory
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, indexCategoryData) => {
    try {
        const indexCategory = await db.IndexCategory.findOne({
            where: { indexCategoryId: id }
        });
        if (!indexCategory) return {
            errorCode: 1,
            description: 'indexCategoryId is not exist'
        }
        await indexCategory.update(indexCategoryData);
        return {
            errorCode: 0,
            indexCategory
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const indexCategoryFound = await db.IndexCategory.findOne({
            where: { indexCategoryId: id }
        });
        if (!indexCategoryFound) return {
            errorCode: 1,
            description: 'indexCategoryId is not exist'
        }
        await indexCategoryFound.destroy();
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