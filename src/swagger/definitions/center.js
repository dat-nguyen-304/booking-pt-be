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
            imgLink:{
                type: 'string',
                example: 'https://kickfit-sports.com/wp-content/uploads/2022/05/vo-si-Muay-Thai-so-1-Viet-Nam-nguyen-tran-duy-nhat.jpg'
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
        required: ["centerId", "centerName", "address","imgLink", "createdAt","activate"]
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