import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/indexes': {
        get: {
            tags: ["Index API"],
            description: 'Get all Index',

            responses: {
                200: successAndReturnArray('indexes', 'Index'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Index API"],
            description: 'Create new Index',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                IndexTime: {
                                    type: 'string',
                                    description: 'Index Name pass by payload',
                                },
                            },
                            required: ['IndexTime']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                IndexTime: {
                                    type: 'string',
                                    description: 'Index Name pass by payload',
                                },
                            },
                            required: ['IndexTime']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('index', 'Index'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/indexes/{IndexId}': {
        patch: {
            tags: ["Index API"],
            description: 'Update a Index by IndexId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'indexId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryId: {
                                    type: 'integer',
                                    description: 'Index Category ID',
                                },
                                measureId: {
                                    type: 'integer',
                                    description: 'Measure ID',
                                },
                                indexNumber: {
                                    type: 'integer',
                                    description: 'Result of measuring',
                                },
                                indexDescription: {
                                    type: 'string',
                                    description: 'Description about index if index have no number',
                                },
                                unit: {
                                    type: 'string',
                                    description: 'Unit of index',
                                },
                                createdAt: {
                                    type: 'integer',
                                    description: 'Created Date',
                                },

                            },
                            required: ['indexCategoryId', 'measureId', 'createdAt']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryId: {
                                    type: 'integer',
                                    description: 'Index Category ID',
                                },
                                measureId: {
                                    type: 'integer',
                                    description: 'Measure ID',
                                },
                                indexNumber: {
                                    type: 'integer',
                                    description: 'Result of measuring',
                                },
                                indexDescription: {
                                    type: 'string',
                                    description: 'Description about index if index have no number',
                                },
                                unit: {
                                    type: 'string',
                                    description: 'Unit of index',
                                },
                                createdAt: {
                                    type: 'integer',
                                    description: 'Created Date',
                                },

                            },
                            required: ['indexCategoryId', 'measureId', 'createdAt']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('index', 'Index'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Index API"],
            description: 'Delete a Index by IndexId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'indexId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('index', 'Index'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}