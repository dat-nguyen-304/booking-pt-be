import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord, unauthorized, forbidden } from "./common";

module.exports = {
    '/api/auth/login': {
        post: {
            tags: ["Authentication API"],
            description: 'Check google token from client and return jwt tokens',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        properties: {
                            errorCode: {
                                type: 'integer',
                                example: 0,
                            },
                            tokens: {
                                type: 'object',
                                properties: {
                                    accessToken: {
                                        type: 'string',
                                        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU.....'
                                    },
                                    refreshToken: {
                                        type: 'string',
                                        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU.....'
                                    }
                                }
                            },
                            emailName: {
                                type: 'String',
                                example: 'Nguyen Van A'
                            }
                        }
                    }
                },
                401: unauthorized,
                403: forbidden,
                500: errorFromServer
            },
        },
    },
    '/api/auth/tokens': {
        post: {
            tags: ["Authentication API"],
            description: 'Get new tokens when access token is expired',
            parameters:
                [{
                    in: 'formData',
                    name: 'refreshToken',
                    type: "string",
                    required: true,
                    description: "refreshToken send to receive new tokens",
                }],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        properties: {
                            errorCode: {
                                type: 'integer',
                                example: 0,
                            },
                            tokens: {
                                type: 'object',
                                properties: {
                                    accessToken: {
                                        type: 'string',
                                        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU.....'
                                    },
                                    refreshToken: {
                                        type: 'string',
                                        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU.....'
                                    }
                                }
                            }
                        }
                    }
                },
                401: unauthorized,
                500: errorFromServer
            },
        },
    }
};