import definitions from "./definitions/center";
const centers = require('./apiDesc/centers');


module.exports = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'Gacha API',
        description: 'Gacha API tutorial',
    },
    host: 'localhost:5000',
    basePath: '/',
    schemes: [
        'http',
    ],
    paths: Object.assign({}, centers),
    tags: [
        {
            name: 'Center API',
            description: 'APIs related to Center',
        },
    ],
    definitions,
};