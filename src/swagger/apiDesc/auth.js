import { errorFromServer, unauthorized, forbidden } from "./common";

module.exports = {
    '/api/auth/login': {
        post: {
            tags: ["Authentication API"],
            description: 'Check google token from client and return jwt tokens',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    errorCode: {
                                        type: 'integer',
                                        example: 0,
                                    },
                                    accountId: {
                                        type: 'integer',
                                        example: '1'
                                    },
                                    emailName: {
                                        type: 'String',
                                        example: 'Nguyen Van A'
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
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                refreshToken: {
                                    type: 'string',
                                    description: 'RefreshToken send to receive new tokens',
                                },
                            },
                            required: ['refreshToken']
                        },
                    },
                    'application/x-www-form-urlencoded': {
                        schema: {
                            type: 'object',
                            properties: {
                                refreshToken: {
                                    type: 'string',
                                    description: 'RefreshToken send to receive new tokens',
                                },
                            },
                            required: ['refreshToken']
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
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
                        }
                    }
                },
                401: unauthorized,
                500: errorFromServer
            },
        },
    }
};