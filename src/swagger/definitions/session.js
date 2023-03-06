const sessionDef = {
    Session: {
        type: 'object',
        properties: {
            sessionId: {
                type: 'integer',
                example: 1
            },
            traineeId: {
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
    },
    SessionMoreInfo: {
        type: 'object',
        properties: {
            sessionId: {
                type: 'integer',
                example: 1
            },
            trainee: {
                $ref: `#/components/schemas/Trainee`
            },
            traineePackage: {
                $ref: `#/components/schemas/TraineePackage`
            },
            center: {
                $ref: `#/components/schemas/Center`
            },
            PT: {
                $ref: `#/components/schemas/PT`
            },
            slot: {
                $ref: `#/components/schemas/Slot`
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
        required: ["session", "trainee", "traineePackage", "center", "PT", "slot", "date", "rating"]
    }
};

export default sessionDef;