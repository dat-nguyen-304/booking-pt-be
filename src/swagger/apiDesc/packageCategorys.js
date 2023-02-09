module.exports = {
    '/api/packageCategorys': {
        get: {
            tags: ["PackageCategory API"],
            description: 'Get all users',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/definitions/PackageCategory',
                        },
                    },
                },
                500: {
                    description: 'Error from server'
                }
            },
        },
    },

    '/api/packageCategorys/{packageCategoryId}': {
        get: {
            tags: ["PackageCategory API"],
            description: 'Get a PackageCategory by packageCategoryId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'packageCategoryId',
                type: "integer",
                required: true,
                description: "PackageCategory ID pass by parameter in url",
            }
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        $ref: '#definitions/PackageCategory'
                    }
                },
                404: {
                    description: 'packageCategoryId does not exist',
                    /*schema: {
                        type: 'object',
                        properties: {
                            errorCode: {
                                type: 'integer',
                                example: 1,
                            },
                            message: {
                                type: 'string',
                                example: "packageCategoryId does not exist"
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