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
                    description: "Number of item in one page pass by parameter in url",
                },
                {
                    in: 'query',
                    name: 'getBy',
                    type: "integer",
                    description: "Property you want to search by it pass by parameter in url",
                },
                {
                    in: 'query',
                    name: 'getByValue',
                    type: "integer",
                    description: "Value of above property pass by parameter in url",
                },
                {
                    in: 'query',
                    name: 'sortBy',
                    type: "integer",
                    description: "Property you want to sort pass by parameter in url",
                },
                {
                    in: 'query',
                    name: 'order',
                    type: "integer",
                    description: "The order of above property can be 'asc' or 'desc' pass by parameter in url",
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
            description: 'Get a PT by PT Id pass through parameter',
            parameters: [{
                in: 'path',
                name: 'PTId',
                type: "integer",
                required: true,
                description: "PT ID pass by parameter in url",
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
                description: "PT ID pass by parameter in url",
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
                                    description: `Center ID pass by payload`,
                                },
                                fullName: {
                                    type: 'string',
                                    description: `PT's full name pass by payload`,
                                },
                                rating: {
                                    type: 'number',
                                    format: 'float',
                                    description: `PT's rating pass by payload`,
                                },
                                description: {
                                    type: 'string',
                                    description: `Description pass by payload`,
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
                                    description: `Center ID pass by payload`,
                                },
                                fullName: {
                                    type: 'string',
                                    description: `PT's full name pass by payload`,
                                },
                                rating: {
                                    type: 'number',
                                    format: 'float',
                                    description: `PT's rating pass by payload`,
                                },
                                description: {
                                    type: 'string',
                                    description: `Description pass by payload`,
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
                                    description: `Center ID pass by payload`,
                                },
                                fullName: {
                                    type: 'string',
                                    description: `PT's full name pass by payload`,
                                },
                                rating: {
                                    type: 'number',
                                    format: 'float',
                                    description: `PT's rating pass by payload`,
                                },
                                description: {
                                    type: 'string',
                                    description: `Description pass by payload`,
                                },
                                imgLink: {
                                    type: 'file',
                                    description: `Img pass by payload`,
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