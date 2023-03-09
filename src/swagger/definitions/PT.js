const PTDef = {
    PT: {
        type: 'object',
        properties: {
            PTId: {
                type: 'integer',
                example: 1
            },
            fullName: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            centerId: {
                type: 'integer',
                example: '1'
            },
            rating: {
                type: 'float',
                example: '4.5'
            },
            description: {
                type: 'string',
                example: 'Tôi là PT số 1 VN'
            },
            imgLink: {
                type: 'string',
                example: 'https://kickfit-sports.com/wp-content/uploads/2022/05/vo-si-Muay-Thai-so-1-Viet-Nam-nguyen-tran-duy-nhat.jpg'
            }

        },
        required: ["PTId", "fullName", "centerId", "description"]
    },
    PTMoreInfo: {
        type: 'object',
        properties: {
            PTId: {
                type: 'integer',
                example: 1
            },
            fullName: {
                type: 'string',
                example: 'Nguyễn Trần Duy Nhất'
            },
            rating: {
                type: 'float',
                example: '4.5'
            },
            description: {
                type: 'string',
                example: 'Tôi là PT số 1 VN'
            },
            imgLink: {
                type: 'string',
                example: 'https://kickfit-sports.com/wp-content/uploads/2022/05/vo-si-Muay-Thai-so-1-Viet-Nam-nguyen-tran-duy-nhat.jpg'
            },
            center: {
                $ref: `#/components/schemas/Center`
            },
        },
        required: ["PTId", "fullName", "center", "description"]
    }
};

export default PTDef;