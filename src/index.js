import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from "./config/connectDB";
import initWebRoutes from "./route/";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger/index";
require('dotenv').config();
connectDB();
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./src/public"));

initWebRoutes(app);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

