const indexCategoryDef = {
    IndexCategory: {
        type: 'object',
        properties: {
            indexCategoryId: {
                type: 'integer',
                example: 1
            },
            indexCategoryName: {
                type: 'integer',
                example: 1
            },
            createdAt: {
                type: 'date',
                example: 1675729720
            }
        },
        required: ["indexCategoryId", "indexCategoryName", "createdAt"]
    }
};

export default indexCategoryDef;