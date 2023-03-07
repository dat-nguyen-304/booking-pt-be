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
            defaultCenterId: {
                type: 'integer',
                example: 1
            },
            startDate: {
                type: 'date',
                example: 1675729720
            },
            endDate: {
                type: 'date',
                example: 1675729720
            },
            registerDate: {
                type: 'date',
                example: 1675729720
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
            "defaultSlotId", "startDate", "endDate", "registerDate", "remainDay", "status", "defaultCenterId"]
    },
    TraineePackageMoreInfo: {
        type: 'object',
        properties: {
            traineePackageId: {
                type: 'integer',
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
            defaultCenterId: {
                $ref: `#/components/schemas/Center`
            },
            mainSlotId: {
                type: 'integer',
                example: 1
            },
            mainSlotTime: {
                type: 'string',
                example: '7:30-9:00'
            },
            startDate: {
                type: 'date',
                example: 1675729720
            },
            endDate: {
                type: 'date',
                example: 1675729720
            },
            registerDate: {
                type: 'date',
                example: 1675729720
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
        required: ["traineePackageId", "mainPT", "trainee", "package", "payment",
            "defaultSlot", "startDate", "endDate", "registerDate", "remainDay", "status", "defaultCenter"]
    }
};

export default traineePackageDef;