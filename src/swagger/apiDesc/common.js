export const errorFromServer = {
    description: 'Error from server',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    errorCode: {
                        type: 'integer',
                        example: -1,
                    },
                    message: {
                        type: 'string',
                        example: "Error from server"
                    }
                }
            }
        }
    }
}

export const idIsNotExist = {
    description: 'id does not exist',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    errorCode: {
                        type: 'integer',
                        example: 1,
                    },
                    message: {
                        type: 'string',
                        example: "id does not exist"
                    }
                }
            }
        }
    }
}

export const unauthorized = {
    description: 'Unauthorized',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    errorCode: {
                        type: 'integer',
                        example: -1,
                    },
                    message: {
                        type: 'string',
                        example: "Unauthorized"
                    }
                }
            }
        }
    }
}

export const forbidden = {
    description: 'Forbidden',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    errorCode: {
                        type: 'integer',
                        example: -1,
                    },
                    message: {
                        type: 'string',
                        example: "Forbidden"
                    }
                }
            }
        }
    }
}

export const successAndReturnArray = (keyArray, modelRef) => {
    return {
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
                        [keyArray]: {
                            type: 'array',
                            items: {
                                $ref: `#/components/schemas/${modelRef}`,
                            }
                        }
                    }
                }
            }
        }
    }
}

export const successAndReturnARecord = (keyRecord, modelRef) => {
    return {
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
                        [keyRecord]: {
                            $ref: `#/components/schemas/${modelRef}`,
                        }
                    }
                }
            }
        }
    }
}

export const deleteSuccess = {
    description: 'Delete success',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    errorCode: {
                        type: 'integer',
                        example: 0,
                    },
                    message: {
                        type: 'string',
                        example: "success"
                    }
                }
            }
        }
    }
}

export const canNotDelete = (model, existModel) => {
    return {
        content: {
            'application/json': {
                description: `Can not delete this ${model} because of existing ${existModel}`,
                schema: {
                    type: 'object',
                    properties: {
                        errorCode: {
                            type: 'integer',
                            example: 1,
                        },
                        message: {
                            type: 'string',
                            example: `Failed! Can not delete this ${model} because of existing ${existModel}`
                        }
                    }
                }
            }
        }
    }
}