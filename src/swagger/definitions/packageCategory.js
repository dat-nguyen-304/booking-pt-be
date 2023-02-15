const packageCategoryDef = {
    PackageCategory: {
        type: 'object',
        properties: {
            packageCategoryId: {
                type: 'integer',
                example: 1
            },
            packageCategoryName: {
                type: 'string',
                example: 'Loại Basic'
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
        required: ["packageCategoryId", "packageCategoryName", "createdAt", "activate"]
    }
};

export default packageCategoryDef;