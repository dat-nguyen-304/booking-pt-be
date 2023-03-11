export const errorFromServer = {
    message: 'Error from server.',
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
                            example: `Can not delete this ${model} because of existing ${existModel}`
                        }
                    }
                }
            }
        }
    }
}

export const successAndReturnPTDetail =
{
    content: {
        'application/json': {
            description: 'Success',
            schema: {
                type: 'object',
                properties: {
                    PTId: {
                        type: 'integer',
                        example: 1
                    },
                    fullName: {
                        type: 'string',
                        example: 'Nguyễn Trần Duy Nhất'
                    },
                    rating: {
                        type: 'float',
                        example: '4.5'
                    },
                    description: {
                        type: 'string',
                        example: 'Tôi là PT số 1 VN'
                    },
                    imgLink: {
                        type: 'string',
                        example: 'https://kickfit-sports.com/wp-content/uploads/2022/05/vo-si-Muay-Thai-so-1-Viet-Nam-nguyen-tran-duy-nhat.jpg'
                    },
                    center: {
                        $ref: `#/components/schemas/Center`
                    },
                    remainSlots: {
                        type: 'array',
                        items: {
                            type: 'object',
                            $ref: `#/components/schemas/Slot`
                        }
                    },
                },
                required: ["PTId", "fullName", "center", "description"]
            }
        }
    }
}