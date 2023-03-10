const notifyDef = {
    Notification: {
        type: 'object',
        properties: {
            title: {
                type: 'string',
                example: 'Chúc mừng'
            },
            message: {
                type: 'string',
                example: 'Bạn đã tham gia vào...'
            },
        },
        required: ["title", "message"]
    },
};

export default notifyDef;