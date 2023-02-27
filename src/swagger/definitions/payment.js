const paymentDef = {
    Payment: {
        type: 'object',
        properties: {
            paymentId: {
                type: 'integer',
                example: 1
            },
            paymentName: {
                type: 'string',
                example: 'Banking'
            }
        },
        required: ["paymentId", "paymentName"]
    }
};

export default paymentDef;