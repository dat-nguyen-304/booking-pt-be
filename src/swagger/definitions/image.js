const imageDef = {
    Image: {
        type: 'object',
        properties: {
            imageId: {
                type: 'integer',
                example: 1
            },
            sessionId: {
                type: 'integer',
                example: 1
            },
            imgLink: {
                type: 'string',
                example: 'Banking'
            }
        },
        required: ["imageId", "sessionId", "imgLink"]
    },
    ImageMoreInfo: {
        type: 'object',
        properties: {
            imageId: {
                type: 'integer',
                example: 1
            },
            session: {
                $ref: `#/components/schemas/Session`
            },
            imgLink: {
                type: 'string',
                example: 'Banking'
            }
        },
        required: ["imageId", "session", "imgLink"]
    }
};

export default imageDef;