import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/sessions': {
        get: {
            tags: ["Session API"],
            description: 'Get all Session',
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
                    name: 'traineePackageId',
                    type: "integer",
                    description: "ID of Trainee Package",
                },
                {
                    in: 'query',
                    name: 'rating',
                    type: "integer",
                    description: "Rating for session from 1 to 5 (Integer).",
                },
                {
                    in: 'query',
                    name: 'date',
                    type: "integer",
                    description: "Session Date",
                },
                {
                    in: 'query',
                    name: 'traineeId',
                    type: "integer",
                    description: "ID of trainee",
                },
                {
                    in: 'query',
                    name: 'slotId',
                    type: "integer",
                    description: "ID of slot",
                },
                {
                    in: 'query',
                    name: 'PTId',
                    type: "integer",
                    description: "ID of PT. If it is available, please ignore centerId",
                },
                {
                    in: 'query',
                    name: 'centerId',
                    type: "integer",
                    description: "ID of center. If it is available, please ignore PTId",
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
                200: successAndReturnArray('sessions', 'SessionMoreInfo'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Session API"],
            description: 'Create new trainee package',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineePackageId: {
                                    type: 'integer',
                                    description: 'ID of your trainee package',
                                },
                                PTId: {
                                    type: 'integer',
                                    description: 'ID of PT of session',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'ID of slot of session',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Rating about session from 1 to 5',
                                },
                                noteFromPT: {
                                    type: 'string',
                                    description: 'Note from PT'
                                },
                                noteFromTrainee: {
                                    type: 'string',
                                    description: 'Note from Trainee'
                                }
                            },
                            required: ['traineePackageId', 'PTId', 'slotId']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineePackageId: {
                                    type: 'integer',
                                    description: 'ID of your trainee package',
                                },
                                PTId: {
                                    type: 'integer',
                                    description: 'ID of PT of session',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'ID of slot of session',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Rating about session from 1 to 5',
                                },
                                noteFromPT: {
                                    type: 'string',
                                    description: 'Note from PT'
                                },
                                noteFromTrainee: {
                                    type: 'string',
                                    description: 'Note from Trainee'
                                }
                            },
                            required: ['traineePackageId', 'PTId', 'slotId']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('session', 'SessionMoreInfo'),
                500: errorFromServer
            }
        }
    },
    '/api/sessions/{sessionId}': {
        get: {
            tags: ["Session API"],
            description: 'Get a session by session ID',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'sessionId',
                type: "integer",
                required: true,
                description: "Session ID",
            }],
            responses: {
                200: successAndReturnARecord('session', 'SessionMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["Session API"],
            description: 'Update one session"',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'sessionId',
                type: "integer",
                required: true,
                description: "Session ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                PTId: {
                                    type: 'integer',
                                    description: 'ID of PT you choose for session',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'ID of slot you choose for session',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'rating for session',
                                },
                                noteFromPT: {
                                    type: 'string',
                                    description: 'Note from PT',
                                },
                                noteFromStudent: {
                                    type: 'string',
                                    description: 'Note from student',
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
                                    description: 'Session ID',
                                },
                                PTId: {
                                    type: 'integer',
                                    description: 'ID of PT you choose for session',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'ID of slot you choose for session',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'rating for session',
                                },
                                noteFromPT: {
                                    type: 'integer',
                                    description: 'Note from PT',
                                },
                                noteFromStudent: {
                                    type: 'integer',
                                    description: 'Note from student',
                                }
                            }
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('session', 'SessionMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};