import definitions from "./definitions";
import paths from "./apiDesc";
require('dotenv').config();

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
    paths,
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    security: [
        {
            Bearer: [],
        },
    ],
    tags: [
        {
            name: 'Authentication API',
            description: 'APIs related to Authentication',
        },
        {
            name: 'Account API',
            description: 'APIs related to Account',
        },
        {
            name: 'Center API',
            description: 'APIs related to Center',
        },
        {
            name: 'Package Category API',
            description: 'APIs related to Package Category',
        }
    ],
    definitions
};