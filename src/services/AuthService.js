import db from "../models/index";
const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateTokens = payload => {
    let { email, role } = payload;
    const accessToken = jwt.sign({ email, role }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    });

    const refreshToken = jwt.sign({ email, role }, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
    })
    return { accessToken, refreshToken }
}

const login = async (email, emailName) => {
    try {
        let [user, created] = await db.Account.findOrCreate({
            where: { email },
            raw: true
        });
        if (created) {
            await db.Trainee.create({
                traineeId: user.accountId,
                fullName: emailName
            })
        }
        const tokens = generateTokens({ email: user.email, role: user.role });
        return {
            errorCode: 0,
            tokens,
            emailName
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getTokens = async (email, role) => {
    try {
        const tokens = generateTokens({ email, role });
        return {
            errorCode: 0,
            tokens
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


module.exports = {
    login, getTokens
}