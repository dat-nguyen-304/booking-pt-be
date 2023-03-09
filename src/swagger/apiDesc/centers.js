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
                                    description: 'Center Name',
                                },
                                address: {
                                    type: 'string',
                                    description: 'Address',
                                },
                                centerImg: {
                                    type: 'file',
                                    description: 'Center Img file',
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
            description: 'Get a center by centerId',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID",
            }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["Center API"],
            description: 'Update one center if operation you is "update". Or you activate/deactivate one center if operation is "toggleActivate"',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID",
            }],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: 'Operation is deactivate or update',
                                },
                                centerName: {
                                    type: 'string',
                                    description: 'Center Name',
                                },
                                address: {
                                    type: 'string',
                                    description: 'Address',
                                },
                                centerImg: {
                                    type: 'file',
                                    description: 'Center Img file',
                                },
                            },
                        },
                    },
                    // 'application/json': {
                    //     schema: {
                    //         type: 'object',
                    //         properties: {
                    //             operation: {
                    //                 type: 'string',
                    //                 description: 'Operation is deactivate or update',
                    //             },
                    //             centerName: {
                    //                 type: 'string',
                    //                 description: 'Center Name',
                    //             },
                    //             address: {
                    //                 type: 'string',
                    //                 description: 'Address',
                    //             },
                    //             centerImg: {
                    //                 type: 'file',
                    //                 description: 'Center Img file',
                    //             },
                    //         },
                    //         required: ['operation'],
                    //     },
                    // },
                },
            },
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Center API"],
            description: 'Delete a center by centerId',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID",
            }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};