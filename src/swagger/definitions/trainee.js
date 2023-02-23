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
            currentPackageId: {
                type: 'integer',
                example: '1'
            }
        },
        required: ["traineeId", "fullName"]
    }
};

export default traineeDef;