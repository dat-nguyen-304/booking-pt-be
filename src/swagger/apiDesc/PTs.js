import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess, successAndReturnPTDetail } from "./common";

module.exports = {
    '/api/PTs': {
        get: {
            tags: ["PT API"],
            description: 'Get all PT',
            parameters: [
                {
                    in: 'query',
                    name: 'keyword',
                    type: "integer",
                    description: "Keyword you want to search by package name",
                }, {
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
                    name: 'centerId',
                    type: "integer",
                    description: "The center where PT works",
                },
                {
                    in: 'query',
                    name: 'rating',
                    type: "integer",
                    description: "Rating of rating greater than or equal to",
                },
                {
                    in: 'query',
                    name: 'sortBy',
                    type: "integer",
                    description: "Property you want to sort",
                },
                {
                    in: 'query',
                    name: 'order',
                    type: "integer",
                    description: "The order of above property can be 'asc' or 'desc'",
                }
            ],
            responses: {
                200: successAndReturnArray('PTs', 'PTMoreInfo'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["PT API"],
            description: 'Create new PT',
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
                                email: {
                                    type: 'string',
                                    description: 'Email of PT',
                                },
                                centerId: {
                                    type: 'integer',
                                    description: 'ID of center',
                                },
                                fullName: {
                                    type: 'string',
                                    description: 'Full name of PT',
                                },
                                imgLink: {
                                    type: 'file',
                                    description: 'Avatar file of PT',
                                },
                                description: {
                                    type: 'string',
                                    description: 'Description about PT',
                                },
                            },
                            required: ['email', 'centerId', 'fullName', 'imgLink'],
                        },
                    }
                },
            },
            responses: {
                200: successAndReturnARecord('PT', 'PTMoreInfo'),
                500: errorFromServer
            }
        }
    },
    '/api/PTs/{PTId}': {
        get: {
            tags: ["PT API"],
            description: 'Get a PT by PT Id',
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID",
            }],
            responses: {
                200: successAndReturnPTDetail,
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["PT API"],
            description: 'Update one PT. You can change Center, Full name, Rating, Description of that PT',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID",
            }
            ],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                centerId: {
                                    type: 'integer',
                                    description: `Center ID`,
                                },
                                fullName: {
                                    type: 'string',
                                    description: `PT's full name`,
                                },
                                rating: {
                                    type: 'number',
                                    format: 'float',
                                    description: `PT's rating`,
                                },
                                description: {
                                    type: 'string',
                                    description: `Description`,
                                },
                                imgLink: {
                                    type: 'file',
                                    description: `New avatar file`,
                                }
                            },
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('PT', 'PT'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};