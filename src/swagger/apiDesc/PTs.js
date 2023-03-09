import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

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
                200: successAndReturnARecord('PT', 'PTMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["PT API"],
            description: 'Update one PT. You can change Center, Full name, Rating, Description of that PT',
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
                    'application/json': {
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
                                }
                            }
                        },
                    },
                    'application/x-www-form-urlencoded': {
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
                                }
                            }
                        },
                    },
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
                                    description: `Img`,
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