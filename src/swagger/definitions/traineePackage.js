const traineePackageDef = {
    TraineePackage: {
        type: 'object',
        properties: {
            traineePackageId: {
                type: 'integer',
                example: 1
            },
            mainPTId: {
                type: 'integer',
                example: 1
            },
            traineeId: {
                type: 'integer',
                example: 1
            },
            packageId: {
                type: 'integer',
                example: 1
            },
            paymentId: {
                type: 'integer',
                example: 1
            },
            mainSlotId: {
                type: 'integer',
                example: 1
            },
            mainSlotTime: {
                type: 'string',
                example: '7:30-9:00'
            },
            mainCenterId: {
                type: 'integer',
                example: 1
            },
            paymentDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            startDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            endDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            registerDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            remainDay: {
                type: 'integer',
                example: 30
            },
            status: {
                type: 'enum("pending", "active", "expired")',
                example: 'user'
            },
            activate: {
                type: 'boolean',
                example: 1
            }
        },
        required: ["traineePackageId", "mainPTId", "traineeId", "packageId", "paymentId",
            "mainSlotId", "startDate", "endDate", "registerDate", "remainDay", "status", "mainCenterId"]
    },
    TraineePackageMoreInfo: {
        type: 'object',
        properties: {
            traineePackageId: {
                type: 'integer',
                example: 1
            },
            mainSlotId: {
                type: 'integer',
                example: 1
            },
            mainSlotTime: {
                type: 'string',
                example: '7:30-9:00'
            },
            paymentDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            startDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            endDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            registerDate: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            remainDay: {
                type: 'integer',
                example: 30
            },
            status: {
                type: 'enum("pending", "active", "expired")',
                example: 'user'
            },
            activate: {
                type: 'boolean',
                example: 1
            },
            mainPT: {
                $ref: `#/components/schemas/PT`
            },
            trainee: {
                $ref: `#/components/schemas/Trainee`
            },
            package: {
                $ref: `#/components/schemas/Package`
            },
            payment: {
                $ref: `#/components/schemas/Payment`
            },
            mainCenter: {
                $ref: `#/components/schemas/Center`
            }
        },
        required: ["traineePackageId", "mainPT", "trainee", "package", "payment",
            "defaultSlot", "startDate", "endDate", "registerDate", "remainDay", "status", "defaultCenter"]
    }
};

export default traineePackageDef;