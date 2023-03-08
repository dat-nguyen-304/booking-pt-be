import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, deleteSuccess } from "./common";

module.exports = {
    '/api/trainees': {
        get: {
            tags: ["Trainee API"],
            description: 'Get all Trainee',
            responses: {
                200: successAndReturnArray('trainees', 'Trainee'),
                500: errorFromServer
            },
        }
    },
    '/api/trainees/{traineeId}': {
        get: {
            tags: ["Trainee API"],
            description: 'Get a trainee by trainee ID',
            parameters: [{
                in: 'path',
                name: 'traineeId',
                type: "integer",
                required: true,
                description: "Trainee ID",
            }],
            responses: {
                200: successAndReturnARecord('trainee', 'Trainee'),
                400: idIsNotExist,
                500: errorFromServer
            }
        },
        patch: {
            tags: ["Trainee API"],
            description: 'Update one trainee. You can change full name of that trainee',
            parameters: [{
                in: 'path',
                name: 'traineeId',
                type: "integer",
                required: true,
                description: "Trainee ID",
            }
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                fullName: {
                                    type: 'string',
                                    description: `Trainee's full name pass by payload`,
                                }
                            }
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                fullName: {
                                    type: 'string',
                                    description: `Trainee's full name pass by payload`,
                                }
                            }
                        },
                    }
                },
            },
            responses: {
                200: successAndReturnARecord('trainee', 'Trainee'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};