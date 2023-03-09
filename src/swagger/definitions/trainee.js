const traineeDef = {
    Trainee: {
        type: 'object',
        properties: {
            traineeId: {
                type: 'integer',
                example: 1
            },
            fullName: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            currentTraineePackageId: {
                type: 'integer',
                example: '1'
            }
        },
        required: ["traineeId", "fullName"]
    },
    TraineeMoreInfo: {
        type: 'object',
        properties: {
            traineeId: {
                type: 'integer',
                example: 1
            },
            fullName: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            currentTraineePackage: {
                $ref: `#/components/schemas/TraineePackage`
            }
        },
        required: ["traineeId", "fullName"]
    }
};

export default traineeDef;