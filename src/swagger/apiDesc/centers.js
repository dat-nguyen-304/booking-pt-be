module.exports = {
    '/api/centers': {
        get: {
            tags: ["Center API"],
            description: 'Get all users',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/definitions/Center',
                        },
                    },
                },
                500: {
                    description: 'Error from server'
                }
            },
        },
    },

    '/api/centers/{centerId}': {
        get: {
            tags: ["Center API"],
            description: 'Get a center by centerId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID pass by parameter in url",
            }
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        $ref: '#definitions/Center'
                    }
                },
                404: {
                    description: 'centerId does not exist',
                    /*schema: {
                        type: 'object',
                        properties: {
                            errorCode: {
                                type: 'integer',
                                example: 1,
                            },
                            message: {
                                type: 'string',
                                example: "centerId does not exist"
                            }
                        }
                    }*/
                },
                500: {
                    description: 'Error from server'
                }
            }
        }
    }
};