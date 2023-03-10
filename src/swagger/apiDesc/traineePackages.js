import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess, canNotDelete } from "./common";

module.exports = {
    '/api/trainee-packages': {
        get: {
            tags: ["Trainee Package API"],
            description: 'Get all Trainee',
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
                    name: 'mainPTId',
                    type: "integer",
                    description: "ID of main PT that trainee has chosen",
                },
                {
                    in: 'query',
                    name: 'mainCenterId',
                    type: "integer",
                    description: "ID of main center",
                },
                {
                    in: 'query',
                    name: 'mainSlotId',
                    type: "integer",
                    description: "ID of main slot that trainee has chosen",
                },
                {
                    in: 'query',
                    name: 'traineeId',
                    type: "integer",
                    description: "ID of trainee",
                },
                {
                    in: 'query',
                    name: 'packageId',
                    type: "integer",
                    description: "Package trainee has subscribed to",
                },
                {
                    in: 'query',
                    name: 'paymentId',
                    type: "integer",
                    description: "The ID of the payment method you use",
                },
                {
                    in: 'query',
                    name: 'status',
                    type: "integer",
                    description: "Status of trainee package can be active or expired",
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
                200: successAndReturnArray('traineePackages', 'TraineePackageMoreInfo'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Trainee Package API"],
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
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of trainee',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'ID of Package',
                                },
                                mainPTId: {
                                    type: 'integer',
                                    description: 'ID of Main PT',
                                },
                                mainSlotId: {
                                    type: 'integer',
                                    description: 'ID of main slot',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'ID of payment',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp)',
                                }
                            },
                            required: ['traineeId', 'packageId', 'mainPTId', 'mainSlotId', 'paymentId', 'startDate'],
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                traineeId: {
                                    type: 'integer',
                                    description: 'ID of trainee',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'ID of Package',
                                },
                                mainPTId: {
                                    type: 'integer',
                                    description: 'ID of Main PT',
                                },
                                mainSlotId: {
                                    type: 'integer',
                                    description: 'ID of main slot',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'ID of payment',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp)',
                                }
                            },
                            required: ['traineeId', 'packageId', 'mainPTId', 'mainSlotId', 'paymentId', 'startDate'],
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('traineePackage', 'TraineePackageMoreInfo'),
                500: errorFromServer
            }
        }
    },
    '/api/trainee-packages/{traineePackageId}': {
        get: {
            tags: ["Trainee Package API"],
            description: 'Get a trainee by trainee package ID',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
                type: "integer",
                required: true,
                description: "Trainee Package ID",
            }],
            responses: {
                200: successAndReturnARecord('traineePackage', 'TraineePackageMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["Trainee Package API"],
            description: 'Update one package of trainee if operation is "update". Or you activate/deactivate one package if operation is "toggleActivate"',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
                type: "integer",
                required: true,
                description: "Trainee Package ID",
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                mainPTId: {
                                    type: 'integer',
                                    description: 'ID of Main PT',
                                },
                                mainSlotId: {
                                    type: 'integer',
                                    description: 'ID of main slotID',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'ID of payment',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp)',
                                }
                            },
                            required: [],
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                mainPTId: {
                                    type: 'integer',
                                    description: 'ID of Main PT',
                                },
                                mainSlotId: {
                                    type: 'integer',
                                    description: 'ID of main slotID',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'ID of payment',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp)',
                                }
                            },
                            required: [],
                        },
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('traineePackage', 'TraineePackageMoreInfo'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        delete: {
            tags: ["Trainee Package API"],
            description: `If trainee who doesn't need to learn anymore but there is no session in the system, you can delete this trainee package`,
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
                type: "integer",
                required: true,
                description: "Trainee Package ID",
            }],
            responses: {
                200: deleteSuccess,
                "400-id-not-exist": idIsNotExist,
                500: errorFromServer,
                "400-can-not-delete": canNotDelete("trainee package", "session")
            }
        }
    },
};