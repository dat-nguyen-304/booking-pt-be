const { Sequelize } = require('sequelize');
export const sequelize = new Sequelize('d40e9s9mfbso8j', 'yhnfdxblnowcup', 'e9cd174b8cb597feee10ecfaf01898a0b02f76cd7b51b72515db4a5a143adf7e', {
    host: 'ec2-3-209-124-113.compute-1.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    port: 5432,
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
