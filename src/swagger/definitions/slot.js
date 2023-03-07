const slotDef = {
    Slot: {
        type: 'object',
        properties: {
            slotId: {
                type: 'integer',
                example: 1
            },
            slotName: {
                type: 'string',
                example: 'Slot 1'
            },
            slotTime: {
                type: 'string',
                example: '7:00 - 8:30'
            }
        },
        required: ["slotId", "slotName"]
    }
};

export default slotDef;