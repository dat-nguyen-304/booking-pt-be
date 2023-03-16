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
            slotTime: {
                type: 'string',
                example: '7:30-9:00'
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
                example: "2023-03-07"
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
            slotId: {
                type: 'integer',
                example: 1
            },
            slotTime: {
                type: 'string',
                example: '7:30-9:00'
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
            },
            traineePackage: {
                $ref: `#/components/schemas/TraineePackage`
            },
            trainee: {
                $ref: `#/components/schemas/Trainee`
            },
            PT: {
                $ref: `#/components/schemas/PT`
            },
            center: {
                $ref: `#/components/schemas/Center`
            }
        },
        required: ["session", "trainee", "traineePackage", "center", "PT", "slot", "date", "rating"]
    }
};

export default sessionDef;