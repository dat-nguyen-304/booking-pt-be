const sessionDef = {
    Session: {
        type: 'object',
        properties: {
            sessionId: {
                type: 'integer',
                example: 1
            },
            traineePackageId: {
                type: 'integer',
                example: 1
            },
            centerId: {
                type: 'integer',
                example: 1
            },
            PTId: {
                type: 'integer',
                example: 1
            },
            slotId: {
                type: 'integer',
                example: 1
            },
            rating: {
                type: 'integer',
                example: 1
            },
            noteFromPT: {
                type: 'string',
                example: 'Nhớ mang dép theo nhé'
            },
            noteFromTrainee: {
                type: 'string',
                example: 'Nhớ mang găng tay hộ tôi nhé'
            },
            date: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["sessionId", "traineePackageId", "centerId", "PTId", "slotId", "date", "rating"]
    }
};

export default sessionDef;