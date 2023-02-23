import express from "express";
import TraineeController from "../controllers/TraineeController";
const traineeRouter = express.Router();

traineeRouter
    .route("/")
    .get(TraineeController.getAll);
traineeRouter
    .route("/:traineeId")
    .get(TraineeController.getById)
    .patch(TraineeController.update)

export default traineeRouter;