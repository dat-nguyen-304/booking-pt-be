import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/PTs': {
        get: {
            tags: ["PT API"],
            description: 'Get all Account',
            responses: {
                200: successAndReturnArray('PTs', 'PT'),
                500: errorFromServer
            },
        }
    },
    '/api/PTs/{PTId}': {
        get: {
            tags: ["PT API"],
            description: 'Get a PT by PT Id pass through parameter',
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('PT', 'PT'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["PT API"],
            description: 'Update one PT. You can change Center, Full name, Rating, Description of that PT',
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID pass by parameter in url",
            },
            {
                in: 'formData',
                name: 'centerId',
                type: "integer",
                description: "Center ID pass by payload",
            },
            {
                in: 'formData',
                name: 'fullName',
                type: "string",
                description: "PT's full name pass by payload",
            },
            {
                in: 'formData',
                name: 'rating',
                type: "float",
                description: "PT's rating pass by payload",
            },
            {
                in: 'formData',
                name: 'description',
                type: "string",
                description: "Description pass by payload",
            }
            ],
            responses: {
                200: successAndReturnARecord('PT', 'PT'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["PT API"],
            description: 'Get a PT by PTId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID pass by parameter in url",
            }],
            responses: {
                200: deleteSuccess,
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};