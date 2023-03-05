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
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Name pass by payload',
                                },
                            },
                            required: ['slotTime']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot Name pass by payload',
                                },
                            },
                            required: ['slotTime']
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
            description: 'Update a slot by slotId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'slotId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot time pass by payload',
                                },
                            },
                            required: ['slotTime']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                slotTime: {
                                    type: 'string',
                                    description: 'Slot time pass by payload',
                                },
                            },
                            required: ['slotTime']
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
        delete: {
            tags: ["Slot API"],
            description: 'Delete a slot by slotId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'slotId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('slot', 'Slot'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}