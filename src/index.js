import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB, connectRedis } from "./config/connectDB";
import initWebRoutes from "./route/";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger/index";
import updateRemainDay from "./utils/updateRemainDay";
import cron from 'node-cron';
const schedule = require('node-schedule');
import checkNotify from "./utils/checkNoti";

require('dotenv').config();
connectDB();
connectRedis();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./src/public"));

initWebRoutes(app);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = new schedule.Range(1, 5);
rule.minute = [0, 30];
rule.hour = new schedule.Range(7, 20);
rule.tz = 'Asia/Ho_Chi_Minh';

schedule.scheduleJob(rule, function() {
    console.log("chạy roi nay");
    checkNotify();
});

cron.schedule('0 0 * * *', () => {
    updateRemainDay();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

