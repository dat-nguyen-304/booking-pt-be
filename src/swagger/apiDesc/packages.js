import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

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
        },
        patch: {
            tags: ["Package API"],
            description: 'Get a package by packageId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'packageId',
                type: "integer",
                required: true,
                description: "Package ID pass by parameter in url",
            },
            {
                in: 'formData',
                name: 'operation',
                type: "string",
                required: true,
                description: "Operation is deactivate or update",
            },
            {
                in: 'formData',
                name: 'packageName',
                type: "string",
                description: "Package Name pass by payload",
            },
            {
                in: 'formData',
                name: 'price',
                type: "integer",
                description: "Price pass by payload",
            },
            {
                in: 'formData',
                name: 'durationByDay',
                type: "integer",
                description: "Duration By Day pass by payload",
            },
            {
                in: 'formData',
                name: 'durationByMonth',
                type: "integer",
                description: "Duration By Month pass by payload",
            },
            {
                in: 'formData',
                name: 'object',
                type: "enum('newbie', 'intermediate', 'professional')",
                description: "Object pass by payload",
            },
            {
                in: 'formData',
                name: 'category',
                type: "enum('free', 'class', 'pt')",
                description: "Category pass by payload",
            }
            ],
            responses: {
                200: successAndReturnARecord('package', 'Package'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
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
                200: deleteSuccess,
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};