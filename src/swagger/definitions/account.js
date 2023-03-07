const accountDef = {
    Account: {
        type: 'object',
        properties: {
            accountId: {
                type: 'integer',
                example: 1
            },
            username: {
                type: 'string',
                example: 'gacha123'
            },
            password: {
                type: 'string',
            },
            gender: {
                type: 'boolean',
                example: 'true'
            },
            role: {
                type: 'enum("user", "pt", "admin"',
                example: 'user'
            },
            email: {
                type: 'string',
                example: '100 Lê Văn Việt'
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
        required: ["accountId", "role", "email", "createdAt", "activate"]
    }
};

export default accountDef;