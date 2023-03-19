import db from "../models/index";

export const checkExist = async (model, condition) => {
    const record = await db[model].findOne({
        where: condition
    })
    if (!record) {
        return {
            errorCode: 0,
            message: `${model} ID does not exist`
        }
    }
}

export const checkRequiredFields = (objectData, requiredFields) => {
    for (const field of requiredFields) {
        if (!objectData[field])
            return {
                errorCode: 1,
                message: `${field} is required.`
            }
    }
    return {
        errorCode: 0,
        message: ''
    }
}