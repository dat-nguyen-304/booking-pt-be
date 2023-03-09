import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess, canNotDelete } from "./common";

module.exports = {
    '/api/payments': {
        get: {
            tags: ["Payment API"],
            description: 'Get all Payment',

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
                                    description: 'Payment Name',
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
                                    description: 'Payment Name',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('payment', 'Payment'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
    },
    '/api/payments/{paymentId}': {
        patch: {
            tags: ["Payment API"],
            description: 'Update a payment by paymentId',
            parameters: [{
                in: 'path',
                name: 'paymentId',
                type: "integer",
                required: true,
                description: "Image ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                paymentName: {
                                    type: 'string',
                                    description: 'Payment Name',
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
                                    description: 'Payment Name',
                                },
                            },
                            required: ['paymentName']
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('payment', 'Payment'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Payment API"],
            description: 'You can delete payment if it does not use in any trainee package',
            parameters: [{
                in: 'path',
                name: 'paymentId',
                type: "integer",
                required: true,
                description: "Payment ID",
            }],
            responses: {
                200: deleteSuccess,
                "400-id-not-exist": idIsNotExist,
                500: errorFromServer,
                "400-can-not-delete": canNotDelete("payment", "trainee package")
            }
        }
    },
}