import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/payments': {
        get: {
            tags: ["Payment API"],
            description: 'Get all Account',

            responses: {
                200: successAndReturnArray('payments', 'Payment'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Payment API"],
            description: 'Create new payment',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                paymentName: {
                                    type: 'string',
                                    description: 'Payment Name pass by payload',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                paymentName: {
                                    type: 'string',
                                    description: 'Payment Name pass by payload',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('package', 'Package'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/payments/{paymentId}': {
        patch: {
            tags: ["Payment API"],
            description: 'Update a payment by paymentId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'paymentId',
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
                                paymentName: {
                                    type: 'string',
                                    description: 'Payment Name pass by payload',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                paymentName: {
                                    type: 'string',
                                    description: 'Payment Name pass by payload',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('image', 'Image'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Payment API"],
            description: 'Delete a payment by paymentId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'paymentId',
                type: "integer",
                required: true,
                description: "Image ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('image', 'Image'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
}