import db from "../models/index";
const getAllAccount = async () => {
    try {
        const accounts = await db.Account.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            accounts
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getAccountById = async (id) => {
    try {
        const account = await db.Center.findOne({
            where: { centerId: id },
            raw: true
        });
        if (!account) return {
            errorCode: 1,
            description: 'accountId is not exist'
        }
        return {
            errorCode: 0,
            account
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllAccount, getAccountById
}