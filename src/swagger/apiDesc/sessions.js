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
                                traineeId: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                traineePackageId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                centerId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                PTId: {
                                    type: 'integer',
                                    description: 'Payment ID pass by payload',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'Default center ID pass by payload',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Default slot ID pass by payload',
                                },
                                date: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                noteFromPT: {
                                    type: 'string',
                                    description: 'Note from PT'
                                },
                                noteFromTrainee: {
                                    type: 'string',
                                    description: 'Note from PT'
                                }
                            },
                            required: ['traineeId', 'packageId', 'paymentId']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'string',
                                    description: 'Package Name pass by payload',
                                },
                                traineePackageId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                centerId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                PTId: {
                                    type: 'integer',
                                    description: 'Payment ID pass by payload',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'Default center ID pass by payload',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Default slot ID pass by payload',
                                },
                                date: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                noteFromPT: {
                                    type: 'string',
                                    description: 'Note from PT'
                                },
                                noteFromTrainee: {
                                    type: 'string',
                                    description: 'Note from PT'
                                }
                            },
                            required: ['traineeId', 'packageId', 'paymentId']
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
                                PTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                centerId: {
                                    type: 'integer',
                                    description: 'Session ID pass by payload',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                noteFromPT: {
                                    type: 'integer',
                                    description: 'Default Center ID pass by payload',
                                },
                                noteFromStudent: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp) pass by payload',
                                }
                            }
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                PTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                centerId: {
                                    type: 'integer',
                                    description: 'Session ID pass by payload',
                                },
                                slotId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                rating: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                noteFromPT: {
                                    type: 'integer',
                                    description: 'Default Center ID pass by payload',
                                },
                                noteFromStudent: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp) pass by payload',
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