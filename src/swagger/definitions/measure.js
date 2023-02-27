const measureDef = {
    Measure: {
        type: 'object',
        properties: {
            measureId: {
                type: 'integer',
                example: 1
            },
            traineeId: {
                type: 'integer',
                example: 1
            },
            recorder: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            time: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["measureId", "traineeId", "time"]
    },
    MeasureMoreInfo: {
        type: 'object',
        properties: {
            measureId: {
                type: 'integer',
                example: 1
            },
            trainee: {
                $ref: `#/components/schemas/Trainee`
            },
            recorder: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            time: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["measureId", "trainee", "time"]
    }
};

export default measureDef;