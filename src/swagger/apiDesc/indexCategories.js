import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

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
                                    description: 'Index Category Name pass by payload',
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
                                    description: 'Index Category Name pass by payload',
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
            description: 'Update a indexCategory by indexCategoryId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'indexCategoryId',
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
                                indexCategoryName: {
                                    type: 'string',
                                    description: 'Index Category name pass by payload',
                                },
                            },
                            required: ['indexCategoryName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                indexCategoryTime: {
                                    type: 'string',
                                    description: 'Index Category time pass by payload',
                                },
                            },
                            required: ['indexCategoryTime']
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
            description: 'Delete a indexCategory by indexCategoryId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'indexCategoryId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('indexCategory', 'IndexCategory'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}