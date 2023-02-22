const packageDef = {
    Package: {
        type: 'object',
        properties: {
            packageId: {
                type: 'integer',
                example: 1
            },
            packageName: {
                type: 'string',
                example: 'Loại Basic'
            },
            durationByMonth: {
                type: 'integer',
                example: '1'
            },
            durationByDay: {
                type: 'integer',
                example: '30'
            },
            category: {
                type: 'enum("class", "pt"',
                example: 'class'
            },
            object: {
                type: 'enum("newbie", "intermediate", "professional"',
                example: 'newbie'
            },
            createdAt: {
                type: 'date',
                example: 1675729720
            },
            activate: {
                type: 'boolean',
                example: true
            }
        },
        required: ["packageId", "packageName", "durationByMonth", "durationByDay", "category", "object", "createdAt", "activate"]
    }
};

export default packageDef;