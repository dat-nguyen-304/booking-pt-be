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
                example: 'Nguyễn Trần Duy Nhất'
            },
            centerId: {
                type: 'integer',
                example: '1'
            },
            rating: {
                type: 'float',
                example: '4.5'
            },
            description: {
                type: 'string',
                example: 'Tôi là PT số 1 VN'
            }
        },
        required: ["PTId", "fullName", "centerId", "description"]
    },
    PTMoreInfo: {
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
            center: {
                $ref: `#/components/schemas/Center`
            },
            rating: {
                type: 'float',
                example: '4.5'
            },
            description: {
                type: 'string',
                example: 'Tôi là PT số 1 VN'
            }
        },
        required: ["PTId", "fullName", "center", "description"]
    }
};

export default PTDef;