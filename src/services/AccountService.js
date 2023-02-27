import db from "../models/index";
const getAllAccount = async (query) => {
    try {
        let { limit, page, sortBy, order } = query;
        const options = { raw: true };
        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }
        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }
        const accounts = await db.Account.findAndCountAll(options);
        return {
            errorCode: 0,
            totalItems: accounts.count,
            totalPage: Math.ceil(accounts.count / options.limit),
            accounts: accounts.rows
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