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
            }
        },
        required: ["indexId", "indexCategoryId", "measuredId", "indexNumber", "indexDescription", "unit"]
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
            }
        },
        required: ["indexId", "indexCategory", "measured", "indexNumber", "indexDescription", "unit"]
    }
};

export default indexDef;