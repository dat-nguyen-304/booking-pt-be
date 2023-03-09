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
            mainCenterId: {
                type: 'integer',
                example: 1
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
                type: 'enum("active", "expired")',
                example: 'active'
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
                type: 'enum("active", "expired")',
                example: 'active'
            },
            activate: {
                type: 'boolean',
                example: 1
            },
            mainPT: {
                $ref: `#/components/schemas/PT`
            },
            mainSlot: {
                $ref: `#/components/schemas/Slot`
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
            "mainSlot", "startDate", "endDate", "registerDate", "remainDay", "status", "defaultCenter"]
    }
};

export default traineePackageDef;