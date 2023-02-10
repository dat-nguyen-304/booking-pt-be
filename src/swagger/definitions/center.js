const centerDef = {
    Center: {
        type: 'object',
        properties: {
            centerId: {
                type: 'integer',
                example: 1
            },
            centerName: {
                type: 'string',
                example: '"Gacha Quận 1'
            },
            address: {
                type: 'string',
                example: '100 Hai Bà Trưng'
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
        required: ["centerId", "centerName", "address", "createdAt","activate"]
    },
    // Centers: {
    //     type: 'array',
    //     items: {
    //         $ref: '#/centerDef/Center'
    //     }
    // }
};

module.exports = centerDef;
// export default centerDef;