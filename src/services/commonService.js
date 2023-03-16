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