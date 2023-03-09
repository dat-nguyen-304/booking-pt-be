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
            activate: {
                type: 'boolean',
                example: true
            },
            createdAt: {
                type: 'date',
                example: "2023-03-07T16:22:34.469Z"
            }
        },
        required: ["indexCategoryId", "indexCategoryName", "createdAt", "activate"]
    }
};

export default indexCategoryDef;