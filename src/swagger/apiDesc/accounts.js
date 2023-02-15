import { errorFromServer, idIsNotExist, unauthorized, forbidden, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/accounts': {
        get: {
            tags: ["Account API"],
            description: 'Get all Account',
            responses: {
                200: successAndReturnArray('accounts', 'Account'),
                401: unauthorized,
                403: forbidden,
                500: errorFromServer
            },
        }
    },
    '/api/accounts/{accountId}': {
        get: {
            tags: ["Account API"],
            description: 'Get a account by accountId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'accountId',
                type: "integer",
                required: true,
                description: "Account ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('account', 'Account'),
                400: idIsNotExist,
                401: unauthorized,
                403: forbidden,
                500: errorFromServer
            }
        }
    },
};