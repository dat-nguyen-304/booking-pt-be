import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess, canNotDelete } from "./common";

module.exports = {
    '/api/measures': {
        get: {
            tags: ["Measure API"],
            description: 'Get all Measure',
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
                    name: 'traineeId',
                    type: "integer",
                    description: "ID of trainee has executed measurement",
                },
                {
                    in: 'query',
                    name: 'recorder',
                    type: "string",
                    description: "Name of person that executed measurement",
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
                200: successAndReturnArray('measures', 'Measure'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Measure API"],
            description: 'Create new Measure',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of the trainee taking the measurement',
                                },
                                recorder: {
                                    type: 'string',
                                    description: 'Name of recorder',
                                }
                            },
                            required: ['traineeId', 'recorder']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of the trainee taking the measurement',
                                },
                                recorder: {
                                    type: 'string',
                                    description: 'Name of recorder',
                                }
                            },
                            required: ['traineeId', 'recorder']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('measure', 'Measure'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/measures/{measureId}': {
        patch: {
            tags: ["Measure API"],
            description: 'Update a measure by measureId',
            parameters: [{
                in: 'path',
                name: 'measureId',
                type: "integer",
                required: true,
                description: "Measure ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of the trainee taking the measurement',
                                },
                                recorder: {
                                    type: 'string',
                                    description: 'Name of recorder',
                                }
                            }
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of the trainee taking the measurement',
                                },
                                recorder: {
                                    type: 'string',
                                    description: 'Name of recorder',
                                }
                            }
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('measure', 'Measure'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Measure API"],
            description: `You can delete a measure if that measure doesn't have any index`,
            parameters: [{
                in: 'path',
                name: 'measureId',
                type: "integer",
                required: true,
                description: "Measure ID",
            }],
            responses: {
                200: deleteSuccess,
                "400-id-not-exist": idIsNotExist,
                500: errorFromServer,
                "400-can-not-delete": canNotDelete("measure", "index")
            }
        }
    },
}