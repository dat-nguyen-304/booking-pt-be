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
                example: "2023-03-07T16:22:34.469Z"
            }
        },
        required: ["indexCategoryId", "indexCategoryName", "createdAt"]
    }
};

export default indexCategoryDef;