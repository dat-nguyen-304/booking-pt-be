import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/sessions': {
        get: {
            tags: ["Session API"],
            description: 'Get all Session',
            responses: {
                200: successAndReturnArray('sessions', 'SessionMoreInfo'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Session API"],
            description: 'Create new trainee package',
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
                                centerId: {
                                    type: 'integer',
                                    description: 'ID of Center you study',
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
                            required: ['traineePackageId', 'centerId', 'PTId', 'slotId']
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
                                centerId: {
                                    type: 'integer',
                                    description: 'ID of Center you study',
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
                            required: ['traineePackageId', 'centerId', 'PTId', 'slotId']
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
            description: 'Get a session by session ID pass through parameter',
            parameters: [{
                in: 'path',
                name: 'sessionId',
                type: "integer",
                required: true,
                description: "Session ID pass by parameter in url",
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
            parameters: [{
                in: 'path',
                name: 'sessionId',
                type: "integer",
                required: true,
                description: "Package ID pass by parameter in url",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                centerId: {
                                    type: 'integer',
                                    description: 'Session ID pass by payload',
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
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                centerId: {
                                    type: 'integer',
                                    description: 'Session ID pass by payload',
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