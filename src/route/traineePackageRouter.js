import express from "express";
import TraineePackageController from "../controllers/TraineePackageController";
const traineePackageRouter = express.Router();

traineePackageRouter
    .route("/")
    .get(TraineePackageController.getAll)
    .post(TraineePackageController.create)
traineePackageRouter
    .route("/:traineeId")
    .get(TraineePackageController.getById)
    .patch(TraineePackageController.updateOrToggleActivate)
    .delete(TraineePackageController.deleteById)

export default traineePackageRouter;