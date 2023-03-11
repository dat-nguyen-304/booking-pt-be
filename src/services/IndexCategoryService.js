import db from "../models/index";
import { redisClient } from "../config/connectDB";

const getAll = async () => {
    let isCached = false;
    let indexCategories
    try {
        const cacheResults = await redisClient.get("indexCategories");
        if (cacheResults) {
            console.log("chạy vo vi da co data");
            isCached = true;
            indexCategories = JSON.parse(cacheResults);
        } else {
            indexCategories = await db.IndexCategory.findAll({
                raw: true
            });
            console.log("chạy vo vi da chưa data");
            if (indexCategories.length === 0) {
                throw "API returned an empty array";
            }
            await redisClient.set("indexCategories", JSON.stringify(indexCategories));
        }
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
        redisClient.del('indexCategories');
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
            message: 'IndexCategory ID does not exist'
        }
        await indexCategory.update(indexCategoryData);
        redisClient.del('indexCategories');
        return {
            errorCode: 0,
            indexCategory
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const toggleActivate = async (id) => {
    try {
        const indexCategoryFound = await db.IndexCategory.findOne({
            where: { indexCategoryId: id }
        });
        if (!indexCategoryFound) return {
            errorCode: 1,
            message: 'IndexCategory ID does not exist'
        }
        await indexCategoryFound.update({ activate: !indexCategoryFound.activate });
        return {
            errorCode: 0,
            indexCategory: indexCategoryFound
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
            message: 'IndexCategory ID does not exist'
        }
        const indexFound = await db.Index.findOne({ indexCategoryId: indexCategoryFound.indexCategoryId });
        if (!indexFound) {
            await indexCategoryFound.destroy();
            return {
                errorCode: 0,
                message: 'success'
            }
        }
        else return {
            errorCode: 0,
            message: 'Can not delete this index category because of existing index'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, create, update, toggleActivate, deleteById
}