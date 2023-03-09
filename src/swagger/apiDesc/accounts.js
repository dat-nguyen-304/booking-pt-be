import { errorFromServer, idIsNotExist, unauthorized, forbidden, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/accounts': {
        get: {
            tags: ["Account API"],
            description: 'Get all Account',
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [{
                in: 'query',
                name: 'page',
                type: "integer",
                description: "No page",
            },
            {
                in: 'query',
                name: 'limit',
                type: "integer",
                description: "Number of item in one page",
            },
            {
                in: 'query',
                name: 'sortBy',
                type: "integer",
                description: "Property you want to sort",
            },
            {
                in: 'query',
                name: 'order',
                type: "integer",
                description: "The order of above property can be 'asc' or 'desc'",
            }
            ],
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
            description: 'Get a account by accountId',
            parameters: [{
                in: 'path',
                name: 'accountId',
                type: "integer",
                required: true,
                description: "Account ID",
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