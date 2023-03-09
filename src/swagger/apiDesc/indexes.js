import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/indexes': {
        get: {
            tags: ["Index API"],
            description: 'Get all Index',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: successAndReturnArray('indexes', 'Index'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Index API"],
            description: 'Create new Index',
            security: [
                {
                    bearerAuth: [],
                },
            ],
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
                                }
                            },
                            required: ['indexCategoryId', 'measureId']
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
                                }

                            },
                            required: ['indexCategoryId', 'measureId']
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
    '/api/indexes/{indexId}': {
        patch: {
            tags: ["Index API"],
            description: 'Update a Index by IndexId',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'indexId',
                type: "integer",
                required: true,
                description: "Index ID",
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
                                }
                            }
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
                                }
                            }
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
            description: 'Delete a Index by IndexId',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'indexId',
                type: "integer",
                required: true,
                description: "Index ID",
            }],
            responses: {
                200: successAndReturnARecord('index', 'Index'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}