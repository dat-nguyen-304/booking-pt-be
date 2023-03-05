import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/centers': {
        get: {
            tags: ["Center API"],
            description: 'Get all Center',
            responses: {
                200: successAndReturnArray('centers', 'Center'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Center API"],
            description: 'Create new Center',
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                centerName: {
                                    type: 'string',
                                    description: 'Center Name pass by payload',
                                },
                                address: {
                                    type: 'string',
                                    description: 'Address pass by payload',
                                },
                                centerImg: {
                                    type: 'file',
                                    description: 'Center Img file pass by payload',
                                },
                            },
                            required: ['centerName', 'address', 'centerImg']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                500: errorFromServer
            },
        },
    },
    '/api/centers/{centerId}': {
        get: {
            tags: ["Center API"],
            description: 'Get a center by centerId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Center API"],
            description: 'Delete a center by centerId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};