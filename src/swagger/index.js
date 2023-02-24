import definitions from "./definitions";
import paths from "./apiDesc";
require('dotenv').config();

module.exports = {
    swagger: '3.0',
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'Gacha API',
        description: 'Gacha API tutorial',
    },
    host: process.env.BE_HOST,
    basePath: '/',
    schemes: [
        process.env.PROTOCOL_METHOD
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
            name: 'Package API',
            description: 'APIs related to Package',
        },
        {
            name: 'PT API',
            description: 'APIs related to PT',
        },
        {
            name: 'Trainee API',
            description: 'APIs related to Trainee',
        },
        {
            name: 'Trainee Package API',
            description: 'APIs related to Trainee Package',
        },
        {
            name: 'Session API',
            description: 'APIs related to Session',
        }
    ],
    components: {
        schemas: { ...definitions }
    }
};