import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/slots': {
        get: {
            tags: ["Slot API"],
            description: 'Get all Slot',

            responses: {
                200: successAndReturnArray('slots', 'Slot'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Slot API"],
            description: 'Create new slot',
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
                                slotName: {
                                    type: 'string',
                                    description: 'Slot Name',
                                },
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Time',
                                },
                            },
                            required: ['slotTime', 'slotName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                slotName: {
                                    type: 'string',
                                    description: 'Slot Name',
                                },
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Time',
                                },
                            },
                            required: ['slotTime', 'slotName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('slot', 'Slot'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/slots/{slotId}': {
        patch: {
            tags: ["Slot API"],
            description: 'Update or deactivate a slot by slotId',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'slotId',
                type: "integer",
                required: true,
                description: "Slot ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: `Operation can be 'update' or 'deactivate'`,
                                },
                                slotName: {
                                    type: 'string',
                                    description: 'Slot Name',
                                },
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Time',
                                },
                            },
                            required: ['operation']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: `Operation can be 'update' or 'deactivate'`,
                                },
                                slotName: {
                                    type: 'string',
                                    description: 'Slot Name',
                                },
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Time',
                                },
                            },
                            required: ['operation']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('slot', 'Slot'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}