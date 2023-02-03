import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
    apis: ["./src/index.js"]
}


const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *  schemas:
 *   Book:
 *    type: object
 *    required:
 *     - title
 *     - author
 *    properties:
 *     id:
 *       type: String
 *       description: The auto-generated id of the book
 *     title:
 *       type: String
 *       description: The book title
 *     author:
 *       type: String
 *       description: the book author
 *    example:
 *      id: d5fe_asz
 *      title: The new turning omnibus
 *      author: Alexander
 */

/**
 * @swagger
 * tags:
 *  name: Books
 *  description: the books managing api
 */

/**
 * @swagger
 * /customers:
 *   get:
 *    description: Use to request all customer
 *    tags: [Books]
 *    produces:
 *     - application/json
 *    responses:
 *     '200':
 *       description: A successfully response
 */
app.get("/customers", (req, res) => {
    res.status(200).json({ name: 'haha', desc: 'hihi' });
});


/**
 * @swagger
 * /customers/{username}:
 *   post:
 *    description: Use to post one customer
 *    tags: [Books] 
 *    produces:
 *     - application/json
 *    responses:
 *     '200':
 *       description: A successfully response
 *    parameters:
 *       - name: username
 *         description: username description
 *         paramType: query
 *         in: path
 *         required: true
 *         type: string
 *       - name: password
 *         paramType: query
 *         in: formData
 *         required: true
 *         type: number
 */
app.post("/customers/:username", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.status(200).json({ name: 'haha', desc: 'hihi' });
});



const PORT = 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))