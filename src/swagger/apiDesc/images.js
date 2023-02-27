import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/images': {
        get: {
            tags: ["Image API"],
            description: 'Get a image by imageId pass through parameter',
            parameters: [{
                in: 'query',
                name: 'sessionId',
                type: "integer",
                description: "Session ID pass by parameter in url",
            },
            {
                in: 'query',
                name: 'traineeId',
                type: "integer",
                description: "Session ID pass by parameter in url",
            },
            {
                in: 'query',
                name: 'imageId',
                type: "integer",
                description: "Session ID pass by parameter in url",
            }, {
                in: 'query',
                name: 'sortBy',
                type: "string",
                description: "Property you want to sort pass by parameter in url",
            },
            {
                in: 'query',
                name: 'order',
                type: "string",
                description: "Order you want to sort 'asc' or 'desc' pass by parameter in url",
            },
            ],
            responses: {
                200: successAndReturnARecord('image', 'Image'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        post: {
            tags: ["Image API"],
            description: 'Create new image',
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                sessionId: {
                                    type: 'integer',
                                    description: 'Session ID pass by payload',
                                },
                                imgFile: {
                                    type: 'file',
                                    description: 'Image file pass by payload',
                                },
                            },
                            required: ['sessionId', 'imgFile']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('image', 'Image'),
                500: errorFromServer
            },
        },
    },
    '/api/images/{imageId}': {
        delete: {
            tags: ["Image API"],
            description: 'Delete a image by imageId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'imageId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('image', 'Image'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};