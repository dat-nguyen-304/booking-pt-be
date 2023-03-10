import { errorFromServer, successAndReturnARecord } from "./common";

module.exports = {
    '/api/pushNotification': {
        post: {
            tags: ["Notify API"],
            description: 'Push notify',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
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
                    },
                },
            },
            responses: {
                200: successAndReturnARecord('notify', 'Notification'),
                500: errorFromServer
            },
        },
    },

}