import express from "express";
import NotificationController from "../controllers/NotificationController";
const pushNotificationRouter = express.Router();

pushNotificationRouter
  .route("/")
  .post(NotificationController.postNotification);

export default pushNotificationRouter;