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
                example: "2023-03-07T16:22:34.469Z"
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
                example: "2023-03-07T16:22:34.469Z"
            }
        },
        required: ["measureId", "trainee", "time"]
    }
};

export default measureDef;