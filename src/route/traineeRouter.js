import express from "express";
import TraineeController from "../controllers/TraineeController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const traineeRouter = express.Router();

traineeRouter
    .route("/")
    .get(verifyAccessToken, verifyAuthorization(['admin']), TraineeController.getAll);
traineeRouter
    .route("/:traineeId")
    .get(TraineeController.getById)
    .patch(verifyAccessToken, verifyAuthorization(['admin', 'trainee']), TraineeController.update)

export default traineeRouter;