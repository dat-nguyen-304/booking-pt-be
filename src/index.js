import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from "./config/connectDB";
import initWebRoutes from "./route/route";
import initSwagger from "./route/swagger";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
require('dotenv').config();
connectDB();
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./src/public"));




// initWebRoutes(app);
initSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

