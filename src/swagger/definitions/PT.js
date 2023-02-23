const PTDef = {
    PT: {
        type: 'object',
        properties: {
            PTId: {
                type: 'integer',
                example: 1
            },
            fullName: {
                type: 'string',
                example: 'Loại Basic'
            },
            centerId: {
                type: 'integer',
                example: '1'
            },
            rating: {
                type: 'float',
                example: '30'
            },
            description: {
                type: 'string',
                example: 'Tôi là PT số 1 VN'
            }
        },
        required: ["PTId", "fullName", "centerId", "description"]
    }
};

export default PTDef;