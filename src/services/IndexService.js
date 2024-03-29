import db from "../models/index";
import { checkExist, checkRequiredFields } from "./commonService";

const getAll = async () => {
    try {
        const indexes = await db.Index.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            indexes
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (indexData) => {
    try {
        const checkRequired = checkRequiredFields(indexData, ['measureId', 'indexCategoryId']);
        if (checkRequired.errorCode === 1) return checkRequired;

        const notExistIndexCategory = await checkExist("IndexCategory", { indexCategoryId: indexData.indexCategoryId });
        if (notExistIndexCategory) return notExistIndexCategory;
        const notExistMeasure = await checkExist("Measure", { measureId: indexData.measureId });
        if (notExistMeasure) return notExistMeasure;

        const indexFound = await db.Index.findOne({
            where: {
                indexCategoryId: indexData.indexCategoryId,
                measureId: indexData.measureId
            }
        });
        if (indexFound) {
            return {
                errorCode: 0,
                message: 'You already added this index category for this measurement'
            }
        }
        const index = await db.Index.create(indexData);
        return {
            errorCode: 0,
            index
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, indexData) => {
    try {
        if (!id) return {
            errorCode: 1,
            message: 'indexId is required'
        }
        if (indexData.indexCategoryId) {
            const notExistIndexCategory = await checkExist("IndexCategory", { indexCategoryId: indexData.indexCategoryId });
            if (notExistIndexCategory) return notExistIndexCategory;

        }
        if (indexData.measureId) {
            const notExistMeasure = await checkExist("Measure", { measureId: indexData.measureId });
            if (notExistMeasure) return notExistMeasure;
        }
        const index = await db.Index.findOne({
            where: { indexId: id }
        });
        if (!index) return {
            errorCode: 1,
            message: 'Index ID does not exist'
        }
        await index.update(indexData);
        return {
            errorCode: 0,
            index
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const indexFound = await db.Index.findOne({
            where: { indexId: id }
        });
        if (!indexFound) return {
            errorCode: 1,
            message: 'Index ID does not exist'
        }
        await indexFound.destroy();
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