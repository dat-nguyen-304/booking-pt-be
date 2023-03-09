import express from "express";
import TraineePackageController from "../controllers/TraineePackageController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const traineePackageRouter = express.Router();

traineePackageRouter
    .route("/")
    .get(verifyAccessToken, verifyAuthorization(['admin']), TraineePackageController.getAll)
    .post(verifyAccessToken, verifyAuthorization(['admin']), TraineePackageController.create)
traineePackageRouter
    .route("/:traineePackageId")
    .get(TraineePackageController.getById)
    .patch(verifyAccessToken, verifyAuthorization(['admin', 'pt']), TraineePackageController.update)
    .delete(verifyAccessToken, verifyAuthorization(['admin']), TraineePackageController.deleteById)

export default traineePackageRouter;