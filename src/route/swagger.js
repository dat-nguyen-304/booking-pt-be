import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import CenterController from "../controllers/CenterController";

let initSwagger = (app) => {
    /**
     * @swagger
     * components:
     *  schemas:
     *   Center:
     *    type: object
     *    required:
     *     - centerId
     *     - centerName
     *     - address
     *     - createdAt
     *    properties:
     *     centerId:
     *       type: String
     *       description: The auto-generated id of the center
     *     centerName:
     *       type: String
     *       description: The center name
     *     address:
     *       type: String
     *       description: The address of center
     *     createdAt:
     *       type: timestamp
     *       description: The auto-generated created time of the center
     *    example:
     *      centerId: 10
     *      centerName: Gacha Quận 1
     *      address: 100 Hai Bà Trưng, Quận 1, TPHCM
     *      createdAt: 1675729720
     */

    /**
     * @swagger
     * tags:
     *  name: Centers
     *  description: The center managing api
     */

    /**
     * @swagger
     * /centers:
     *   get:
     *    description: Use to request all centers
     *    tags: [Centers]
     *    produces:
     *     - application/json
     *    responses:
     *     '200':
     *       description: A successfully response
     *     '500':
     *       description: Server error
     */
    app.get("/centers", CenterController.getAllCenter);


    /**
     * @swagger
     * /center/{centerId}:
     *   post:
     *    description: Use to get one center by centerId
     *    tags: [Centers] 
     *    produces:
     *     - application/json
     *    responses:
     *     '200':
     *       description: A successfully response
     *     '404':
     *       description: CenterId is not exist
     *     '500': 
     *       description: Server error
     *    parameters:
     *       - name: centerId
     *         description: id of center pass through url
     *         paramType: query
     *         in: path
     *         required: true
     *         type: string
     */
    app.post("/center/:centerId", CenterController.getCenterById);


    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: "customer api",
                description: "Customer API information",
                contact: {
                    name: "amazing developer"
                },
                servers: "http://localhost:5000"
            }
        },
        apis: ["./src/route/swagger.js"]
    }


    const swaggerDocs = swaggerJsdoc(swaggerOptions);
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

}

module.exports = initSwagger;