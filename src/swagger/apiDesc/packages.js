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
        },
        post: {
            tags: ["Package API"],
            description: 'Create new package',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                packageName: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                price: {
                                    type: 'integer',
                                    description: 'Price pass by payload',
                                },
                                durationByDay: {
                                    type: 'integer',
                                    description: 'Duration By Day pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                object: {
                                    type: 'string',
                                    enum: ['newbie', 'intermediate', 'professional'],
                                    description: 'Object pass by payload',
                                },
                                category: {
                                    type: 'string',
                                    enum: ['havept', 'nopt'],
                                    description: 'Category pass by payload',
                                },
                            },
                            required: ['packageName', 'price', 'durationByDay', 'durationByMonth', 'object', 'category']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                packageName: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                price: {
                                    type: 'integer',
                                    description: 'Price pass by payload',
                                },
                                durationByDay: {
                                    type: 'integer',
                                    description: 'Duration By Day pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                object: {
                                    type: 'string',
                                    enum: ['newbie', 'intermediate', 'professional'],
                                    description: 'Object pass by payload',
                                },
                                category: {
                                    type: 'string',
                                    enum: ['havept', 'nopt'],
                                    description: 'Category pass by payload',
                                },
                            },
                            required: ['packageName', 'price', 'durationByDay', 'durationByMonth', 'object', 'category']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('package', 'Package'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
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
            description: 'Update one PT if operation you pass by payload is "update". Or you activate/deactivate one package if operation is "toggleActivate"',
            parameters: [{
                in: 'path',
                name: 'packageId',
                type: "integer",
                required: true,
                description: "Package ID pass by parameter in url",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: 'Operation is deactivate or update',
                                },
                                packageName: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                price: {
                                    type: 'integer',
                                    description: 'Price pass by payload',
                                },
                                durationByDay: {
                                    type: 'integer',
                                    description: 'Duration By Day pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                object: {
                                    type: 'string',
                                    enum: ['newbie', 'intermediate', 'professional'],
                                    description: 'Object pass by payload',
                                },
                                category: {
                                    type: 'string',
                                    enum: ['havept', 'nopt'],
                                    description: 'Category pass by payload',
                                },
                            },
                            required: ['operation'],
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: 'Operation is deactivate or update',
                                },
                                packageName: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                price: {
                                    type: 'integer',
                                    description: 'Price pass by payload',
                                },
                                durationByDay: {
                                    type: 'integer',
                                    description: 'Duration By Day pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                object: {
                                    type: 'string',
                                    enum: ['newbie', 'intermediate', 'professional'],
                                    description: 'Object pass by payload',
                                },
                                category: {
                                    type: 'string',
                                    enum: ['havept', 'nopt'],
                                    description: 'Category pass by payload',
                                },
                            },
                            required: ['operation'],
                        },
                    },
                },
            },
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