import { errorFromServer, idIsNotExist, successAndReturnArray, successAndReturnARecord } from "./common";

module.exports = {
    '/api/centers': {
        get: {
            tags: ["Center API"],
            description: 'Get all Center',
            responses: {
                200: successAndReturnArray('centers', 'Center'),
                500: errorFromServer
            },
        },
        post: {
            tags: ["Center API"],
            description: 'Create new Center',
            parameters:
                [{
                    in: 'formData',
                    name: 'centerName',
                    type: "string",
                    required: true,
                    description: "CenterName pass by parameter",
                },
                {
                    in: 'formData',
                    name: 'address',
                    type: "string",
                    required: true,
                    description: "Address pass by parameter in url",
                },
                {
                    in: 'formData',
                    name: 'centerImg',
                    type: "file",
                    required: true,
                    description: "ImgLink ID pass by parameter in url",
                }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                500: errorFromServer
            },
        },
    },
    '/api/centers/{centerId}': {
        get: {
            tags: ["Center API"],
            description: 'Get a center by centerId pass through parameter',
            parameters: [{
                in: 'path',
                name: 'centerId',
                type: "integer",
                required: true,
                description: "Center ID pass by parameter in url",
            }],
            responses: {
                200: successAndReturnARecord('center', 'Center'),
                400: idIsNotExist,
                500: errorFromServer
            }
        }
    },
};