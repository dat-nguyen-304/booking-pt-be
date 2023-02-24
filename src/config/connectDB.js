const { Sequelize } = require('sequelize');
const redis = require("redis");
require('dotenv').config();
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    port: process.env.DB_PORT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

let redisClient;
export let connectRedis = async () => {
    redisClient = redis.createClient({
        password: 'KBtEPYRhcIhShn5dkd6z1hFPnXurEkRi',
        socket: {
            host: 'redis-16132.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
            port: 16132
        }
    });

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    await redisClient.connect();
}

export {redisClient};
