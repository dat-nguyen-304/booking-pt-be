import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/packages': {
        get: {
            tags: ["Package API"],
            description: 'Get all Account',
            responses: {
                200: successAndReturnArray('packages', 'Package'),
                500: errorFromServer
            },
        }
    },
    '/api/packages/{packageId}': {
        get: {
            tags: ["Package API"],
            description: 'Get a package by packageId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'packageId',
                type: "integer",
                required: true,
                description: "Package ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('package', 'Package'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};