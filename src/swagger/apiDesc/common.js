export const errorFromServer = {
    description: 'Error from server',
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

export const idIsNotExist = {
    description: 'id does not exist',
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

export const unauthorized = {
    description: 'Unauthorized',
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


export const forbidden = {
    description: 'Forbidden',
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

export const successAndReturnArray = (keyArray, modelRef) => {
    return {
        description: 'Success',
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
                        $ref: `#/definitions/${modelRef}`,
                    }
                }
            }
        }
    }
}

export const successAndReturnARecord = (keyRecord, modelRef) => {
    return {
        description: 'Success',
        schema: {
            type: 'object',
            properties: {
                errorCode: {
                    type: 'integer',
                    example: 0,
                },
                [keyRecord]: {
                    type: 'object',
                    $ref: `#definitions/${modelRef}`
                }
            }
        }
    }
}