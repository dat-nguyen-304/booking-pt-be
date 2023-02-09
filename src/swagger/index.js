import definitions from "./definitions/center";
require('dotenv').config();
const centers = require('./apiDesc/centers');
const packageCategorys = require('./apiDesc/packageCategorys');

module.exports = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'Gacha API',
        description: 'Gacha API tutorial',
    },
    host: process.env.BE_HOST,
    basePath: '/',
    schemes: [
        'http',
    ],
    paths: Object.assign({}, centers, packageCategorys),
    tags: [
        {
            name: 'Center API',
            description: 'APIs related to Center',
        },
    ],
    definitions,    
};