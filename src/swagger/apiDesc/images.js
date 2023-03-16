import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/images': {
        get: {
            tags: ["Image API"],
            description: 'Get a image by imageId',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    in: 'query',
                    name: 'page',
                    type: "integer",
                    description: "Number of page",
                },
                {
                    in: 'query',
                    name: 'limit',
                    type: "integer",
                    description: "Number of item in one page",
                },
                {
                    in: 'query',
                    name: 'sessionId',
                    type: "integer",
                    description: "Session ID",
                },
                {
                    in: 'query',
                    name: 'sortBy',
                    type: "string",
                    description: "Property you want to sort",
                },
                {
                    in: 'query',
                    name: 'order',
                    type: "string",
                    description: "Order you want to sort 'asc' or 'desc'",
                },
            ],
            responses: {
                200: successAndReturnARecord('image', 'ImageMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        post: {
            tags: ["Image API"],
            description: 'Create new image',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                sessionId: {
                                    type: 'integer',
                                    description: 'Session ID',
                                },
                                imgFile: {
                                    type: 'array',
                                    items: {
                                        type: "string",
                                        format: "binary"
                                    },
                                    description: 'Image file',
                                },
                            },
                            required: ['sessionId', 'imgFile']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('image', 'ImageMoreInfo'),
                500: errorFromServer
            },
        },
    },
    '/api/images/{imageId}': {
        get: {
            tags: ["Image API"],
            description: 'Get a image by image ID',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'imageId',
                type: "integer",
                required: true,
                description: "Image ID",
            }],
            responses: {
                200: successAndReturnARecord('image', 'ImageMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Image API"],
            description: 'Delete a image by imageId',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'imageId',
                type: "integer",
                required: true,
                description: "Image ID",
            }],
            responses: {
                200: successAndReturnARecord('image', 'ImageMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};