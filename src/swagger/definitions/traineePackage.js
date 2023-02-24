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
            defaultSlotId: {
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
    }
};

export default traineePackageDef;