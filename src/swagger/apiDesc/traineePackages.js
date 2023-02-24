import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/trainee-packages': {
        get: {
            tags: ["Trainee Package API"],
            description: 'Get all Trainee',
            responses: {
                200: successAndReturnArray('trainee-packages', 'Trainee'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Trainee Package API"],
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
                                mainPTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'Payment ID pass by payload',
                                },
                                defaultCenterId: {
                                    type: 'integer',
                                    description: 'Default center ID pass by payload',
                                },
                                defaultSlotId: {
                                    type: 'integer',
                                    description: 'Default slot ID pass by payload',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                endDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                registerDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                remainDay: {
                                    type: 'integer',
                                    description: 'Remain day pass by payload',
                                },
                                status: {
                                    type: 'string',
                                    enum: ['pending', 'active', 'expired'],
                                    description: 'status of trainee package pass by payload',
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
                                mainPTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'Payment ID pass by payload',
                                },
                                defaultCenterId: {
                                    type: 'integer',
                                    description: 'Default center ID pass by payload',
                                },
                                defaultSlotId: {
                                    type: 'integer',
                                    description: 'Default slot ID pass by payload',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                endDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                registerDate: {
                                    type: 'integer',
                                    description: 'Start Date (timestamp) pass by payload',
                                },
                                remainDay: {
                                    type: 'integer',
                                    description: 'Remain day pass by payload',
                                },
                                status: {
                                    type: 'string',
                                    enum: ['pending', 'active', 'expired'],
                                    description: 'status of trainee package pass by payload',
                                }
                            },
                            required: ['traineeId', 'packageId', 'paymentId']
                        },
                    },
                },
            }
        }
    },
    '/api/trainee-packages/{traineePackageId}': {
        get: {
            tags: ["Trainee Package API"],
            description: 'Get a trainee by trainee package ID pass through parameter',
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
                type: "integer",
                required: true,
                description: "Trainee ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('trainee', 'Trainee'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["Trainee Package API"],
            description: 'Update one package of trainee if operation you pass by payload is "update". Or you activate/deactivate one package if operation is "toggleActivate"',
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
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
                                operation: {
                                    type: 'string',
                                    description: 'Operation is deactivate or update',
                                },
                                mainPTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                traineeId: {
                                    type: 'integer',
                                    description: 'Trainee ID pass by payload',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                defaultSlotId: {
                                    type: 'integer',
                                    description: 'Default Slot ID pass by payload',
                                },
                                defaultCenterId: {
                                    type: 'integer',
                                    description: 'Default Center ID pass by payload',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp) pass by payload',
                                },
                                endDate: {
                                    type: 'integer',
                                    description: 'End Date (TimeStamp) pass by payload',
                                },
                                registerDate: {
                                    type: 'integer',
                                    description: 'Register Date (TimeStamp) pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                remainDay: {
                                    type: 'integer',
                                    description: 'Number of days the package is active',
                                },
                                status: {
                                    type: 'string',
                                    enum: ['pending', 'active', 'expired'],
                                    description: 'Category pass by payload',
                                },
                                activate: {
                                    type: 'boolean',
                                    description: 'Determine if the trainee package is activated or not'
                                }
                            },
                            required: ['operation'],
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    description: 'Operation is deactivate or update',
                                },
                                mainPTId: {
                                    type: 'integer',
                                    description: 'Main PT ID pass by payload',
                                },
                                traineeId: {
                                    type: 'integer',
                                    description: 'Trainee ID pass by payload',
                                },
                                packageId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                paymentId: {
                                    type: 'integer',
                                    description: 'Package ID pass by payload',
                                },
                                defaultSlotId: {
                                    type: 'integer',
                                    description: 'Default Slot ID pass by payload',
                                },
                                defaultCenterId: {
                                    type: 'integer',
                                    description: 'Default Center ID pass by payload',
                                },
                                startDate: {
                                    type: 'integer',
                                    description: 'Start Date (TimeStamp) pass by payload',
                                },
                                endDate: {
                                    type: 'integer',
                                    description: 'End Date (TimeStamp) pass by payload',
                                },
                                registerDate: {
                                    type: 'integer',
                                    description: 'Register Date (TimeStamp) pass by payload',
                                },
                                durationByMonth: {
                                    type: 'integer',
                                    description: 'Duration By Month pass by payload',
                                },
                                remainDay: {
                                    type: 'integer',
                                    description: 'Number of days the package is active',
                                },
                                status: {
                                    type: 'string',
                                    enum: ['pending', 'active', 'expired'],
                                    description: 'Category pass by payload',
                                },
                                activate: {
                                    type: 'boolean',
                                    description: 'Determine if the trainee package is activated or not'
                                }
                            },
                            required: ['operation'],
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
        delete: {
            tags: ["Trainee Package API"],
            description: 'Get a trainee package by Id pass through parameter',
            parameters: [{
                in: 'path',
                name: 'traineePackageId',
                type: "integer",
                required: true,
                description: "Package ID pass by parameter in url",
            }],
            responses: {
                200: deleteSuccess,
                "400-id-not-exist": idIsNotExist,
                500: errorFromServer,
                "400-can-not-delete": {
                    description: 'Can not delete this trainee package because of existing sessions of this trainee package',
                    schema: {
                        type: 'object',
                        properties: {
                            errorCode: {
                                type: 'integer',
                                example: 1,
                            },
                            message: {
                                type: 'string',
                                example: "Can not delete this trainee package"
                            }
                        }
                    }
                }
            }
        }
    },
};