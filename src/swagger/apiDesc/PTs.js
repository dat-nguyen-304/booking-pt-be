import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/PTs': {
        get: {
            tags: ["PT API"],
            description: 'Get all PT',
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
                    }
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