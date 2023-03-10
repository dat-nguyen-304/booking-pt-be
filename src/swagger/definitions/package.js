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
            price: {
                type: 'integer',
                example: '1000000'
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
                type: 'enum("havept", "nopt")',
                example: 'class'
            },
            object: {
                type: 'enum("newbie", "intermediate", "professional")',
                example: 'newbie'
            },
            createdAt: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            },
            activate: {
                type: 'boolean',
                example: true
            }
        },
        required: ["packageId", "packageName", "price", "durationByMonth", "durationByDay", "category", "object", "createdAt", "activate"]
    }
};

export default packageDef;