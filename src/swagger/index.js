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
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        schemas: { ...definitions }
    },
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
        },
        {
            name: 'Image API',
            description: 'APIs related to Image',
        },
        {
            name: 'Slot API',
            description: 'APIs related to Slot',
        },
        {
            name: 'Payment API',
            description: 'APIs related to Payment',
        },
        {
            name: 'Measure API',
            description: 'APIs related to Measure',
        },
        {
            name: 'Index API',
            description: 'APIs related to Index',
        },
        {
            name: 'Index Category API',
            description: 'APIs related to Index Category',
        }
    ]
};

