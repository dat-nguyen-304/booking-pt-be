const indexDef = {
    Index: {
        type: 'object',
        properties: {
            indexId: {
                type: 'integer',
                example: 1
            },
            indexCategoryId: {
                type: 'integer',
                example: 1
            },
            measuredId: {
                type: 'integer',
                example: 1
            },
            indexNumber: {
                type: 'float',
                example: 9.5
            },
            indexDescription: {
                type: 'string',
                example: 'normal'
            },
            unit: {
                type: 'string',
                example: 'kg'
            },
            createdAt: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["indexId", "indexCategoryId", "measuredId", "indexNumber", "indexDescription", "unit", "createdAt"]
    },
    IndexMoreInfo: {
        type: 'object',
        properties: {
            indexId: {
                type: 'integer',
                example: 1
            },
            indexCategory: {
                $ref: `#/components/schemas/IndexCategory`
            },
            measured: {
                $ref: `#/components/schemas/Measure`
            },
            indexNumber: {
                type: 'float',
                example: 9.5
            },
            indexDescription: {
                type: 'string',
                example: 'normal'
            },
            unit: {
                type: 'string',
                example: 'kg'
            },
            createdAt: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["indexId", "indexCategory", "measured", "indexNumber", "indexDescription", "unit", "createdAt"]
    }
};

export default indexDef;