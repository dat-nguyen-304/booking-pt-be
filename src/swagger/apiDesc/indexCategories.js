import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess, canNotDelete } from "./common";

module.exports = {
    '/api/index-categories': {
        get: {
            tags: ["Index Category API"],
            description: 'Get all IndexCategory',

            responses: {
                200: successAndReturnArray('indexCategories', 'IndexCategory'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Index Category API"],
            description: 'Create new indexCategory',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryName: {
                                    type: 'string',
                                    description: 'Index Category Name',
                                },
                            },
                            required: ['indexCategoryName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryName: {
                                    type: 'string',
                                    description: 'Index Category Name',
                                },
                            },
                            required: ['indexCategoryName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('indexCategory', 'IndexCategory'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/index-categories/{indexCategoryId}': {
        patch: {
            tags: ["Index Category API"],
            description: 'Update a indexCategory by indexCategoryId',
            parameters: [{
                in: 'path',
                name: 'indexCategoryId',
                type: "integer",
                required: true,
                description: "Image ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryName: {
                                    type: 'string',
                                    description: 'Index category name',
                                },
                            },
                            required: ['indexCategoryName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryName: {
                                    type: 'string',
                                    description: 'Index category time',
                                },
                            },
                            required: ['indexCategoryName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('indexCategory', 'IndexCategory'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Index Category API"],
            description: `You can delete a index category if that index category doesn't have any index`,
            parameters: [{
                in: 'path',
                name: 'indexCategoryId',
                type: "integer",
                required: true,
                description: "Image ID",
            }],
            responses: {
                200: deleteSuccess,
                "400-id-not-exist": idIsNotExist,
                500: errorFromServer,
                "400-can-not-delete": canNotDelete("index category", "index")
            }
        }
    },
}